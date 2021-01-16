import { Component, OnInit } from '@angular/core';
// import {BookingStatus, Colors} from '../doctor-side-booking-list/doctor-side-booking-list.component';
import {DoctorType} from '../../utils/Constants';
import {Router} from '@angular/router';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {UserData} from '../../models/user-data';
import {DataLoaderService} from '../../services/data-loader.service';
import {PageEvent} from '@angular/material/paginator';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  currentDate = new Date();
  RESULTS_PER_PAGE = 5;
  PAGINATION_START = 0;
  PAGINATION_END = this.RESULTS_PER_PAGE;

  bookings = [
    {
      bookingId: 2387,
      doctorId: '76531',
      date: '03-04-2020',
      doctorName: 'Dr. John Doe',
      bookingStatus: BookingStatus.BOOKING_COMPLETED
    },
    {
      bookingId: 1196,
      doctorId: '65456',
      date: '18-05-2020',
      doctorName: 'Dr. Sumanasiri',
      bookingStatus: BookingStatus.BOOKING_CANCELLED
    },
    {
      bookingId: 5729,
      doctorId: '76537',
      date: '02-05-2020',
      doctorName: 'Dr. Tom Harrison',
      bookingStatus: BookingStatus.BOOKING_NOT_STARTED
    }
  ];

  doctorSide = false;
  titleBooking = 'BOOKING';
  selectedBookingId = null;
  showBookings = 'all'; // 'new' or 'all'

  doctor = {
    id: 2,
    name: 'Dr. Punya Anupama',
    professionalType: DoctorType.GEN,
    bio: 'MBBS [COLOMBO](1998)',
    specialities: [
      'Consultant Pathologist'
    ],
    consultationPrice: 'Rs. 1500.00'
  };

  booking = {
    bookingId: 2387,
    doctorId: '4352545235',
    patientId: '76531',
    doctorName: 'Dr. Tim Cook',
    patientName: 'John Doe',
    patientAge: 29,
    skypeID: 'kafkjnf34',
    phoneNumber: '0773092511',
    bookingStatus: BookingStatus.BOOKING_NOT_STARTED,
    messageThread: [
      {
        sender: 'patient',
        message: 'Hi doctor, I have a headache and a cough.'
      },
      {
        sender: 'doctor',
        message: 'Hi John, do you have any allergies?'
      },
      {
        sender: 'patient',
        message: 'I\'m allergic to panadol'
      },
      {
        sender: 'doctor',
        message: 'Thanks.'
      },
      {
        sender: 'patient',
        message: 'THANK YOU DOC!.'
      },
      {
        sender: 'patient',
        message: 'Can you send me a prescription btw?'
      },
      {
        sender: 'doctor',
        message: 'Sure. I will send you.'
      },
      {
        sender: 'patient',
        message: 'Awesome. Thanks'
      }
    ],
    bookingPrice: 'Rs. 2000.00',
    doctorCharge: 'Rs. 1800.00'
  };
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
  private selectedProfessionalUsername: string;
  date = new FormControl(new Date());
  fromDate = this.date.value;
  toDate: Date;
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(
      private router: Router,
      private dataHandlerService: DataHandlerService,
      private dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {

    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    if (localStorage.getItem(LocalStorageKeys.loggedInUser)) {
      this.loggedInUser = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
      this.doctorSide = this.loggedInUser.doctor;
    }

    // setting the to date of the default filter dates
    if (this.loggedInUser) {
      this.toDate = this.setToDate(this.fromDate, this.doctorSide ? 1 : 7);
    }

    this.selectedProfessionalUsername = localStorage.getItem(LocalStorageKeys.selectedProfessionalUsername);
    this.loadProfessionalData(this.selectedProfessionalUsername);
  }

  private loadProfessionalData(selectedProfessionalUsername: any) {
    this.dataHandlerService.loadUserDataSimple(selectedProfessionalUsername, this.dataLoaderService)
        .then((data: any) => {
          this.doctor = data;
        });
  }

  selectBooking($event: string) {
    this.selectedBookingId = $event;
    this.router.navigate(['appointment']).then(r => {});
  }

  setToDate(fromDate: Date, days) {
    const date = new Date();
    date.setDate(fromDate.getDate() + days);
    return date;
  }

  getColor($event) {
    switch ($event) {
      case BookingStatus.BOOKING_CANCELLED:
        return Colors.BOOKING_CANCELLED;
      case BookingStatus.BOOKING_NOT_STARTED:
        return Colors.BOOKING_NOT_STARTED;
      case BookingStatus.BOOKING_COMPLETED:
        return Colors.BOOKING_COMPLETED;
      case BookingStatus.BOOKING_CURRENT:
        return Colors.BOOKING_CURRENT;
      default:
        return Colors.BOOKING_NOT_STARTED;
    }
  }

  save() {
    this.isConfirmationActive = false;
    this.changeRequestSent = true;
  }

  cancel() {
    this.isConfirmationActive = false;
    this.changeRequestSent = false;
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
}

export enum BookingStatus {
  BOOKING_CANCELLED = 'BOOKING_CANCELLED',
  BOOKING_COMPLETED = 'BOOKING_COMPLETED',
  BOOKING_CURRENT = 'BOOKING_CURRENT',
  BOOKING_NOT_STARTED = 'BOOKING_NOT_STARTED'
}

export enum Colors {
  BOOKING_CANCELLED = '#ff6666',
  BOOKING_COMPLETED = '#e6e6e6',
  BOOKING_CURRENT = '#99ccff',
  BOOKING_NOT_STARTED = '#d5ff80'
}
