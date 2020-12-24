import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DoctorType} from '../../utils/Constants';

@Component({
  selector: 'app-booking-enter-time',
  templateUrl: './booking-enter-time.component.html',
  styleUrls: ['./booking-enter-time.component.css']
})
export class BookingEnterTimeComponent implements OnInit {

  doctor = {
    id: 1,
    name: 'Dr. Nuwan Chinthaka',
    doctorType: DoctorType.CON,
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
        title: 'Thursday',
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

  days = [
    {
      date: this.getDate(0).date,
      day: this.getDate(0).day
    },
    {
      date: this.getDate(1).date,
      day: this.getDate(1).day
    },
    {
      date: this.getDate(2).date,
      day: this.getDate(2).day
    },
    {
      date: this.getDate(3).date,
      day: this.getDate(3).day
    },
    {
      date: this.getDate(4).date,
      day: this.getDate(4).day
    },
    {
      date: this.getDate(5).date,
      day: this.getDate(5).day
    },
    {
      date: this.getDate(6).date,
      day: this.getDate(6).day
    },
  ];

  selectedDate: any;
  selectedSpecialization: any;
  consultationTime = '8.00 P.M.';
  summaryShown = false;

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

  getDate(apart: number) {
    const today = new Date();
    today.setDate(today.getDate() + apart);
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const date = mm + '/' + dd + '/' + yyyy;

    const dayNum = today.getDay();
    let day: string;
    switch (dayNum) {
      case 0:
        day = 'Sunday';
        break;
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
    }
    return {
      date,
      day
    };
  }

  scheduleVisibilityToggle($event: boolean) {
    this.isScheduleVisible = $event;
  }

  navigateToPaymentOrLogIn() {
    this.router.navigate(['confirmation']).then(r => {
    });
  }

  getTimeSlots(selectedDate: any) {
    const found = this.doctorSchedule.schedule.find((scheduleObj) => {
      return scheduleObj.title = selectedDate;
    });
    return [found.slot1, found.slot2, found.slot3];
  }

  continueClicked($event: boolean) {
    this.summaryShown = $event;
  }
}
