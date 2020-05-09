import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {
  panelOpenState = false;

  hide = true;
  doctorSchedule = {
    name: 'John Doe',
    doctorRegistrationNumber: 'reg/xxx/34234235',
    qualificationString: 'MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India',
    pricePerConsultation: 1500,
    priceCurrency: 'LKR',
    averageTimeForOneConsultation: 20,
    tags: 'general, Hematology, Gastrointestinal Surgery, Transplantation, Surgery',
    schedule: {
      monday: {
        slot1: '12:30',
        slot2: '15:30',
        slot3: '18:00'
      },
      tuesday: {
        slot1: '12:30',
        slot2: '15:30',
        slot3: '18:00'
      },
      wednesday: {
        slot1: '12:30',
        slot2: '15:30',
        slot3: '18:00'
      },
      thursday: {
        slot1: '12:30',
        slot2: '15:30',
        slot3: '18:00'
      },
      friday: {
        slot1: '12:30',
        slot2: '15:30',
        slot3: '18:00'
      },
      saturday: {
        slot1: '12:30',
        slot2: '15:30',
        slot3: '18:00'
      },
      sunday: {
        slot1: '12:30',
        slot2: '15:30',
        slot3: '18:00'
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
