import { Component, OnInit } from '@angular/core';
import {BookingStatus} from '../doctor-side-booking-list/doctor-side-booking-list.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-doctor-side-booking',
  templateUrl: './doctor-side-booking.component.html',
  styleUrls: ['./doctor-side-booking.component.css']
})
export class DoctorSideBookingComponent implements OnInit {

    isConfirmationActive = false;
    changeRequestSent = false;
    booking = {
      id: 2387,
      createdDateTime: new Date(2020, 4, 20, 10, 45),
      appointmentDateTime: new Date(2020, 4, 21, 10, 0),
      durationInMinutes: 15,
      status: BookingStatus.BOOKING_NOT_STARTED,
      price: 'Rs. 2000.00',
      doctorNotes: [],
      userNotes: [],
      cancellationRule: '',
      messageThread:
          [
              {
                  sender: 'doctor',
                  message: 'jhbsdkcsd'
              },
              {
                  sender: 'patient',
                  message: 'jhbsdddfdfdkcsd'
              },
              {
                  sender: 'doctor',
                  message: 'hgvbhashjd'
              }
          ]
  };
  patient = {patientId: '76531', patientName: 'Mr. John Doe',
      contactNumber: '0773092511', whatsAppNumber: '0773092511', email: 'kavin256@gmail.com',
      birthday: new Date(1993, 4, 21).toLocaleDateString('en-US'),
      age: 33,
      knownAllergies: 'allergic to bad music, allergic to negative people'};
  doctor = {doctorId: '4352545235', doctorName: 'Dr. Tim Cook'};
  isPatientDetailsShown = true;

  constructor() { }

  ngOnInit() {
  }

  userConsent() {
      this.isConfirmationActive = !this.isConfirmationActive;
  }

  cancel() {
      // this.updateSchedule();
      this.isConfirmationActive = false;
      this.changeRequestSent = true;
      this.booking.status = BookingStatus.BOOKING_CANCELLED;
  }

  dismiss() {
      this.isConfirmationActive = false;
      this.changeRequestSent = false;
  }
}
