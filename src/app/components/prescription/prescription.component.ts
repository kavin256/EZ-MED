import { Component, OnInit } from '@angular/core';
import {BookingStatus} from '../doctor-side-booking-list/doctor-side-booking-list.component';
import {professionalType} from '../search-professionals/search-professionals.component';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  currentDate = new Date();

  doctor = {
    id: 2,
    name: 'Dr. Punya Anupama',
    professionalType: professionalType.GENERAL_PRACTITIONER,
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
    patientTitle: 'Mr',
    patientAge: 29,
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

  items = [
      'Augmentine 625mg bd - 5 days',
      'Omeprazole 20mg bd - 5 days',
      'Fexofenadine 180mg 1 night - 5 days'
  ];

  preview = false;
  prescriptionList: any [] = [
      '',
      ''
  ];

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

    previewToggle($event: string) {
        if ($event === 'preview') {
          this.preview = true;
        } else {
          this.preview = false;
        }
    }
}
