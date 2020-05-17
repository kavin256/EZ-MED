import { Component, OnInit } from '@angular/core';
import {BookingStatus} from '../doctor-side-booking-list/doctor-side-booking-list.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-doctor-side-booking',
  templateUrl: './doctor-side-booking.component.html',
  styleUrls: ['./doctor-side-booking.component.css']
})
export class DoctorSideBookingComponent implements OnInit {

  booking = {
      bookingId: 2387,
      doctorId: '4352545235',
      patientId: '76531',
      doctorName: 'Dr. Tim Cook',
      patientName: 'John Doe',
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

  constructor() { }

  ngOnInit() {
  }

  copyToClipBoard() {
      const copyText = document.getElementById('skypeId');
      // @ts-ignore
      copyText.select();
      document.execCommand('copy');
      // @ts-ignore
      alert('Copied the text: ' + copyText.value);
  }
}
