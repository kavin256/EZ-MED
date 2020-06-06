import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {

  constructor() { }

  meridian = true;

  doctorProfile = {
    name: 'John Doe',
    doctorRegistrationNumber: 'reg/xxx/34234235',
    qualificationString: 'MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India',
    pricePerConsultation: 1500,
    priceCurrency: 'LKR',
    averageTimeForOneConsultation: 20,
    tags: 'general, Hematology, Gastrointestinal Surgery, Transplantation, Surgery'
  };

  scheduleOfDoc = {
    schedule: [
      {
        title: 'Monday',
        slot1: {from: {hour: 11, minute: 30}, to: {hour: 13, minute: 30}, isActive: false},
        slot2: {from: {hour: 15, minute: 30}, to: {hour: 17, minute: 0}, isActive: true},
        slot3: {from: {hour: 18, minute: 30}, to: {hour: 20, minute: 30}, isActive: false}
      },
      {
        title: 'Tuesday',
        slot1: {from: {hour: 11, minute: 30}, to: {hour: 13, minute: 30}, isActive: false},
        slot2: {from: {hour: 15, minute: 30}, to: {hour: 17, minute: 0}, isActive: true},
        slot3: {from: {hour: 18, minute: 30}, to: {hour: 20, minute: 30}, isActive: true}
      },
      {
        title: 'Wednesday',
        slot1: {from: {hour: 11, minute: 30}, to: {hour: 13, minute: 30}, isActive: true},
        slot2: {from: {hour: 15, minute: 30}, to: {hour: 17, minute: 0}, isActive: true},
        slot3: {from: {hour: 18, minute: 30}, to: {hour: 20, minute: 30}, isActive: true}
      },
      {
        title: 'Thursday',
        slot1: {from: {hour: 11, minute: 30}, to: {hour: 13, minute: 30}, isActive: true},
        slot2: {from: {hour: 15, minute: 30}, to: {hour: 17, minute: 0}, isActive: true},
        slot3: {from: {hour: 18, minute: 30}, to: {hour: 20, minute: 30}, isActive: true}
      },
      {
        title: 'Friday',
        slot1: {from: {hour: 11, minute: 30}, to: {hour: 13, minute: 30}, isActive: true},
        slot2: {from: {hour: 15, minute: 30}, to: {hour: 17, minute: 0}, isActive: true},
        slot3: {from: {hour: 18, minute: 30}, to: {hour: 20, minute: 30}, isActive: true}
      },
      {
        title: 'Saturday',
        slot1: {from: {hour: 11, minute: 30}, to: {hour: 13, minute: 30}},
        slot2: {from: {hour: 15, minute: 30}, to: {hour: 17, minute: 0}},
        slot3: {from: {hour: 18, minute: 30}, to: {hour: 20, minute: 30}}
      },
      {
        title: 'Sunday',
        slot1: {from: {hour: 11, minute: 30}, to: {hour: 13, minute: 30}},
        slot2: {from: {hour: 15, minute: 30}, to: {hour: 17, minute: 0}},
        slot3: {from: {hour: 18, minute: 30}, to: {hour: 20, minute: 30}}
      }
    ]
  };

  ngOnInit() {
  }

}
