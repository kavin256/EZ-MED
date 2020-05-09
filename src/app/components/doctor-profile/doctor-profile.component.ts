import { Component, OnInit } from '@angular/core';
import {colors} from '@angular/cli/utilities/color';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  bookings = [
    {
      name: 'Simon ',
      skypeId: 'simon3',
      email: 'jhbksrc@gmail.com',
      bookingNo: 1,
      state: 'Done'
    },
    {
      name: 'George',
      skypeId: 'ge45t',
      email: 'geo@yahoo.com',
      bookingNo: 2,
      state: 'In Progress'
    },
    {
      name: 'Tom',
      skypeId: 'tom5frfr',
      email: 'kfhb@hotmail.com',
      bookingNo: 3,
      state: 'New'
    },
    {
      name: 'John',
      skypeId: 'john54g',
      email: 'kjn@gmail.com',
      bookingNo: 4,
      state: 'Cancelled'
    },
    {
      name: 'Emilie',
      skypeId: 'emilie5t',
      email: 'hbjdc@yahoo.com',
      bookingNo: 5,
      state: 'New'
    }
  ];
  doctorSchedule = {
    schedule: [
      {
        monday: {
          slot1: '12:30',
          slot2: '15:30',
          slot3: '18:00'
        }
      },
      {
        tuesday: {
          slot1: '12:30',
          slot2: '15:30',
          slot3: '18:00'
        }
      },
      {
        wednesday: {
          slot1: '12:30',
          slot2: '15:30',
          slot3: '18:00'
        }
      },
      {
        thursday: {
          slot1: '12:30',
          slot2: '15:30',
          slot3: '18:00'
        }
      },
      {
        friday: {
          slot1: '12:30',
          slot2: '15:30',
          slot3: '18:00'
        }
      },
      {
        saturday: {
          slot1: '12:30',
          slot2: '15:30',
          slot3: '18:00'
        }
      },
      {
        sunday: {
          slot1: '12:30',
          slot2: '15:30',
          slot3: '18:00'
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  getColor(state: string) {
    return '#000000';
  }
}
