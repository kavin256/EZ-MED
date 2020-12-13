import { Component, OnInit } from '@angular/core';
import {BookingStatus, Colors} from '../doctor-side-booking-list/doctor-side-booking-list.component';
import {DoctorType} from '../../utils/Constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-booking-list',
  templateUrl: './patient-booking-list.component.html',
  styleUrls: ['./patient-booking-list.component.css']
})
export class PatientBookingListComponent implements OnInit {

  currentDate = new Date();

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

  title = 'MY BOOKINGS';
  titleBooking = 'BOOKING';
  selectedBookingId = null;
  showBookings = 'all'; // 'new' or 'all'

  doctor = {
    id: 2,
    name: 'Dr. Punya Anupama',
    doctorType: DoctorType.GENERAL_PRACTITIONER,
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

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

  selectBooking($event: string) {
    this.selectedBookingId = $event;
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

  goToUserDashboard() {
    this.router.navigate(['user/dashboard']).then(r => {
    });
  }

  newBooking() {
    this.router.navigate(['searchProfessionals']).then(r => {
    });
  }
}
