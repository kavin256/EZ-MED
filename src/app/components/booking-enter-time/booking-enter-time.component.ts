import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DoctorType} from '../../utils/Constants';
import {DataKey, DataStoreService} from '../../services/data-store.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-booking-enter-time',
  templateUrl: './booking-enter-time.component.html',
  styleUrls: ['./booking-enter-time.component.css']
})
export class BookingEnterTimeComponent implements OnInit {

  doctor = {
    id: 1,
    name: 'Dr. Nuwan Chinthaka',
    professionalType: DoctorType.CON,
    bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
    specialities: [
      'Consultant Neurologist',
      'Consultant Pediatrician'
    ],
    consultationPrice: 'Rs. 2000.00'
  };
  availableAppointmentsForProfessional = [];

  isScheduleVisible = false;

  days = [
    {
      date: this.getDate(0).date,
      day: this.getDate(0).day,
      available: true
    },
    {
      date: this.getDate(1).date,
      day: this.getDate(1).day,
      available: true
    },
    {
      date: this.getDate(2).date,
      day: this.getDate(2).day,
      available: true
    },
    {
      date: this.getDate(3).date,
      day: this.getDate(3).day,
      available: true
    },
    {
      date: this.getDate(4).date,
      day: this.getDate(4).day,
      available: true
    },
    {
      date: this.getDate(5).date,
      day: this.getDate(5).day,
      available: true
    },
    {
      date: this.getDate(6).date,
      day: this.getDate(6).day,
      available: true
    },
  ];

  selectedDate: any;
  selectedAppointmentId = '';
  consultationTime = '8.00 P.M.';
  summaryShown = false;

  constructor(
      private router: Router,
      private datePipe: DatePipe,
      private dataStore: DataStoreService
  ) { }

  ngOnInit() {
    this.loadProfessional();
    this.loadAvailableAppointmentsForProfessional();
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
    const selectedFullDate = new Date(selectedDate);

    let dummyAppointments = [];
    const found = this.availableAppointmentsForProfessional.find((appointmentTime: any) => {
      const appointmentDate = new Date(appointmentTime.date);
      return appointmentDate.getFullYear() === selectedFullDate.getFullYear() &&
          appointmentDate.getMonth() === selectedFullDate.getMonth() &&
          appointmentDate.getDate() === selectedFullDate.getDate();
    });
    if (found && found.dummyAppointments) {
      dummyAppointments = found.dummyAppointments;
      dummyAppointments.forEach((app) => {
        if (app && app.appointmentTime) {
          const dummyDate = new Date();
          const h = JSON.parse(JSON.stringify(parseInt(app.appointmentTime.toString().split(':')[0], 10)));
          const m = JSON.parse(JSON.stringify(parseInt(app.appointmentTime.toString().split(':')[1], 10)));
          dummyDate.setHours(h);
          dummyDate.setMinutes(m);
          app.displayAppointmentTime = dummyDate;
        }
      });
    }
    return dummyAppointments;
  }

  continueClicked($event: boolean) {
    this.summaryShown = $event;
  }

  private loadAvailableAppointmentsForProfessional() {
    this.availableAppointmentsForProfessional = [
      {
        date: '2020-12-26T20:30:00.000+0000',
        dummyAppointments: [
          {
            appointmentId: 16,
            appointmentTime: '08:00:00',
            timeSlotId: null
          }
        ]
      },
      {
        date: '2020-12-27T20:30:00.000+0000',
        dummyAppointments: [
          {
            appointmentId: 21,
            appointmentTime: '10:00:00',
            timeSlotId: null
          }
        ]
      },
      {
        date: '2020-12-25T20:30:00.000+0000',
        dummyAppointments: [
          {
            appointmentId: 12,
            appointmentTime: '10:00:00',
            timeSlotId: null
          }
        ]
      }
    ];
    if (this.dataStore.get(DataKey.availableAppointmentsForProfessional).getValue()) {
      this.availableAppointmentsForProfessional = this.dataStore.get(DataKey.availableAppointmentsForProfessional).getValue();
    }
    this.filterOutUnavailableDays(this.days);
  }

  // Todo: complete
  private loadProfessional() {
  }

  private filterOutUnavailableDays(days: any[]) {
    days.forEach((day: any) => {
      if (this.getTimeSlots(day.date) && this.getTimeSlots(day.date).length > 0) {
        day.available = true;
      } else {
        day.available = false;
      }
    });
  }

  getDisplaySelectedTime(appointmentId: any) {
    let displaySelectedTime = '';
    if (appointmentId) {
      this.availableAppointmentsForProfessional.forEach((appointmentArray) => {
        if (appointmentArray.dummyAppointments) {
          appointmentArray.dummyAppointments.forEach((appointment) => {
            if (appointment && appointment.appointmentId && appointment.appointmentId === parseInt(appointmentId, 10)) {
              displaySelectedTime = this.datePipe.transform(appointment.displayAppointmentTime, 'shortTime');
            }
          });
        }
      });
    }
    return displaySelectedTime;
  }

  goToSearchProfessionals() {
    this.router.navigate(['searchProfessionals']).then(r => {
    });
  }
}
