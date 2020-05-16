import { Component, OnInit } from '@angular/core';

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
      massageThread: [
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
        }
      ],
      bookingPrice: 'Rs. 2000.00',
      doctorCharge: 'Rs. 1800.00'
    };

  constructor() { }

  ngOnInit() {
  }

}
