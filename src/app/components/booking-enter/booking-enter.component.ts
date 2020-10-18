import { Component, OnInit } from '@angular/core';
import {professionalType} from '../search-professionals/search-professionals.component';

@Component({
  selector: 'app-booking-enter',
  templateUrl: './booking-enter.component.html',
  styleUrls: ['./booking-enter.component.css']
})
export class BookingEnterComponent implements OnInit {

  doctor = {
    id: 1,
    name: 'Dr. Nuwan chinthaka',
    professionalType: professionalType.CONSULTANT,
    bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
    specialities: [
      'Consultant Neurologist',
      'Consultant Pediatrician'
    ],
    consultationPrice: 'Rs. 2000.00',
    isSkypePreferred: true,
    isWhatsAppPreferred: false
  };

  isScheduleVisible = false;
  isPatientSkypeAvailable = false;
  media = [
    {value: 'skype', viewValue: 'Skype'},
    {value: 'whatsapp', viewValue: 'Whatsapp'}
  ];
  skypeID: any;
  constructor() { }

  ngOnInit() {
  }

  scheduleVisibilityToggle($event: boolean) {
      this.isScheduleVisible = $event;
  }

  saveSkype(b: boolean) {
    //
  }
}
