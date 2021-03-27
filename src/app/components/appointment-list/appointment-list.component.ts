import {Component, OnInit, ViewChild} from '@angular/core';
import {APPOINTMENT_STATUS} from '../../utils/Constants';
import {Router} from '@angular/router';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {UserData} from '../../models/user-data';
import {DataLoaderService} from '../../services/data-loader.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';
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
  selectedBookingId = null;
  showBookings = 'all'; // 'new' or 'all'
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
  private selectedProfessionalUserId: string;
  date = new FormControl(new Date());
  fromDate = this.date.value;
  toDate: Date;
  checked = 1;

  constructor(
      private router: Router,
      private dataHandlerService: DataHandlerService,
      private dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {

    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);

    if (sessionStorage.getItem(LocalStorageKeys.loggedInUser)) {
      this.loggedInUser = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));
      this.doctorSide = this.loggedInUser.doctor;
    }

    // setting the to date of the default filter dates
    if (this.loggedInUser) {
      this.toDate = this.setToDate(this.fromDate, this.doctorSide ? 0 : 7);
    }

    this.selectedProfessionalUserId = sessionStorage.getItem(LocalStorageKeys.selectedProfessionalUserId);
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

    this.dataHandlerService.loadUserAppointments(userid, this.dataLoaderService, fromDateFormatted, toDateFormatted)
        .then((data: any) => {
          this.bookings = data;
        });
  }

  selectBooking($event: AppointmentData) {
    if (!this.isDummy($event.status)) {
      this.selectedBookingId = $event.appointmentId;
      this.router.navigate(['appointment'], { queryParams: { id: this.selectedBookingId } }).then(r => {});
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
        return Colors.BOOKING_CANCELLED;
      case APPOINTMENT_STATUS.BOOKED:
        return Colors.BOOKING_NOT_STARTED;
      case APPOINTMENT_STATUS.COMPLETED:
        return Colors.BOOKING_COMPLETED;
      case APPOINTMENT_STATUS.IN_PROGRESS:
        return Colors.BOOKING_CURRENT;
      default:
        return Colors.BOOKING_DUMMY;
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

  newBooking() {
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
}

export enum Colors {
  BOOKING_CANCELLED = '#ff6666',
  BOOKING_COMPLETED = '#e6e6e6',
  BOOKING_CURRENT = '#99ccff',
  BOOKING_NOT_STARTED = '#d5ff80',
  BOOKING_DUMMY = '#727171'
}
