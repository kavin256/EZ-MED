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
    name: 'Dr. Nuwan Chinthaka',
    professionalType: professionalType.CONSULTANT,
    bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
    specialities: [
      'Consultant Neurologist',
      'Consultant Pediatrician'
    ],
    consultationPrice: 'Rs. 2000.00'
  };
  doctorSchedule = {
    schedule: [
      {
        title: 'Monday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Tuesday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Wednesday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Monday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Friday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Saturday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Sunday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      }
    ]
  };

  isScheduleVisible = false;

  constructor() { }

  ngOnInit() {
  }

  scheduleVisibilityToggle($event: boolean) {
      this.isScheduleVisible = $event;
  }
}
