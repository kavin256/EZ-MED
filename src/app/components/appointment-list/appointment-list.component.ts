import {Component, OnInit, ViewChild} from '@angular/core';
import {APPOINTMENT_STATUS} from '../../utils/Constants';
import {Router} from '@angular/router';
import {SessionStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {UserData} from '../../models/user-data';
import {DataLoaderService} from '../../services/data-loader.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {AppointmentData} from '../../models/appointment-data';
import {Time} from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  @ViewChild('paginator', null) paginator: MatPaginator;
  currentDate = new Date();
  RESULTS_PER_PAGE = 5;
  PAGINATION_START = 0;
  PAGINATION_END = this.RESULTS_PER_PAGE;
  bookings: AppointmentData [] = [];

  doctorSide = false;
  selectedAppointmentId = null;
  showAppointments = 'all'; // 'new' or 'all'
  doctor: UserData;
  isConfirmationActive = false;
  changeRequestSent = false;

  items = [
    'Augmentine 625mg bd - 5 days',
    'Omeprazole 20mg bd - 5 days',
    'Fexofenadine 180mg 1 night - 5 days'
  ];

  prescriptionList = [
    {
      prescription: ['Augmentine 625mg bd - 5 days',
      'Omeprazole 20mg bd - 5 days',
      'Fexofenadine 180mg 1 night - 5 days']
    },
    {
      prescription: ['Augmentine 625mg bd - 5 days',
        'Omeprazole 20mg bd - 5 days',
      'Fexofenadine 180mg 1 night - 5 days']
    }
  ];
  isPrescriptionsVisible = false;
  selectedPrescription = null;
  loggedInUser: UserData = null;
  selectedProfessionalUserId: string;
  date = new FormControl(new Date());
  fromDate = this.date.value;
  toDate: Date;
  checked = 1;
  completedAvailable;

  constructor(
      public router: Router,
      public dataHandlerService: DataHandlerService,
      public dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {

    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser)), this.router);

    if (sessionStorage.getItem(SessionStorageKeys.loggedInUser)) {
      this.loggedInUser = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));
      this.doctorSide = this.loggedInUser.doctor;
      this.completedAvailable = !this.doctorSide;
    }

    // setting the to date of the default filter dates
    if (this.loggedInUser) {
      this.toDate = this.setToDate(this.fromDate, this.doctorSide ? 0 : 7);
    }

    this.selectedProfessionalUserId = sessionStorage.getItem(SessionStorageKeys.selectedProfessionalUserId);
    if (this.selectedProfessionalUserId) {
      this.loadProfessionalData(this.selectedProfessionalUserId);
    }

    // loadUserAppointments
    this.loadUserAppointments(this.loggedInUser.userId, this.fromDate, this.toDate);

    if (this.doctorSide) {
      // doctor specific tasks
    } else {
      // patient specific tasks
    }
  }

  isDummy(status: APPOINTMENT_STATUS) {
    return status === APPOINTMENT_STATUS.DUMMY;
  }

  private loadProfessionalData(selectedProfessionalUserId: any) {
    this.dataHandlerService.loadUserDataUsingUserId(selectedProfessionalUserId, this.dataLoaderService)
        .then((data: any) => {
          this.doctor = data;
        });
  }

  private loadUserAppointments(userid: string, fromDate: Date, toDate: Date) {

    // date formatting
    const toDateObj = this.dataHandlerService.convertDateFormat(toDate);
    const fromDateObj = this.dataHandlerService.convertDateFormat(fromDate);
    const toDateFormatted = toDateObj.yyyy + '-' + toDateObj.mm + '-' + toDateObj.dd;
    const fromDateFormatted = fromDateObj.yyyy + '-' + fromDateObj.mm + '-' + fromDateObj.dd;
    const dummyAvailable = false;

    this.dataHandlerService.loadUserAppointments(userid, this.dataLoaderService, fromDateFormatted, toDateFormatted,
        dummyAvailable, this.completedAvailable)
        .then((data: any) => {
          this.bookings = data;
        });
  }

  selectAppointment($event: AppointmentData) {
    if (!this.isDummy($event.status)) {
      this.selectedAppointmentId = $event.appointmentId;
      this.router.navigate(['appointment'], { queryParams: { id: this.selectedAppointmentId } }).then(r => {});
    }
  }

  setToDate(fromDate: Date, days) {
    const date = new Date();
    date.setDate(fromDate.getDate() + days);
    return date;
  }

  getColor($event) {
    switch ($event) {
      case APPOINTMENT_STATUS.CANCELLED_BY_DOCTOR || APPOINTMENT_STATUS.CANCELLED_BY_PATIENT:
        return Colors.APPOINTMENT_CANCELLED;
      case APPOINTMENT_STATUS.NOT_STARTED:
        return Colors.APPOINTMENT_NOT_STARTED;
      case APPOINTMENT_STATUS.COMPLETED:
        return Colors.APPOINTMENT_COMPLETED;
      case APPOINTMENT_STATUS.IN_PROGRESS:
        return Colors.APPOINTMENT_CURRENT;
      default:
        return Colors.APPOINTMENT_DUMMY;
    }
  }

  save() {
    this.isConfirmationActive = false;
    this.changeRequestSent = true;
  }

  selectPrescription(prescription: string[]) {
    this.selectedPrescription = prescription;
  }

  showPrescriptions(bookingId: number, action?) {
    this.isPrescriptionsVisible = action;
  }

  goToDashboard() {
    this.PAGINATION_START = 0;
    this.PAGINATION_END = this.RESULTS_PER_PAGE;
    if (this.doctorSide) {
      this.router.navigate(['doctor/dashboard']).then(r => {
      });
    } else {
      this.router.navigate(['user/dashboard']).then(r => {
      });
    }
  }

  goToPage($event: PageEvent) {
    this.PAGINATION_START = $event.pageIndex * $event.pageSize;
    this.PAGINATION_END = this.PAGINATION_START + $event.pageSize;
  }

  newAppointment() {
    this.router.navigate(['searchProfessionals']).then(r => {
    });
  }

  startDateChange($event: MatDatepickerInputEvent<any>) {
    this.fromDate = $event.value;
    if (this.fromDate > this.toDate) {
      this.toDate = this.fromDate;
    }
    if (this.paginator) { this.paginator.firstPage(); }
    this.loadUserAppointments(this.loggedInUser.userId, this.fromDate, this.toDate);
  }

  endDateChange($event: MatDatepickerInputEvent<Date>) {
    this.toDate = $event.value;
    if (this.fromDate > this.toDate) {
      this.fromDate = this.toDate;
    }
    if (this.paginator) { this.paginator.firstPage(); }
    this.loadUserAppointments(this.loggedInUser.userId, this.fromDate, this.toDate);
  }

  getStatusName(status: APPOINTMENT_STATUS) {
    return this.dataHandlerService.convertCamelCaseToSentence(APPOINTMENT_STATUS[status]);
  }

  getTime(appointmentTime: Time) {
    return moment(appointmentTime, ['HH.mm.ss']).format('hh:mm a');
  }

  setFilter($number: number) {
    this.checked = $number;
  }

  toggleCompletedAvailable() {
    this.completedAvailable = !this.completedAvailable;
    if (this.paginator) { this.paginator.firstPage(); }
    this.loadUserAppointments(this.loggedInUser.userId, this.fromDate, this.toDate);
  }
}

export enum Colors {
  APPOINTMENT_CANCELLED = '#ff6666',
  APPOINTMENT_COMPLETED = '#e6e6e6',
  APPOINTMENT_CURRENT = '#99ccff',
  APPOINTMENT_NOT_STARTED = '#d5ff80',
  APPOINTMENT_DUMMY = '#727171'
}
