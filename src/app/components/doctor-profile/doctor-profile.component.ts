import { Component, OnInit } from '@angular/core';
import {colors} from '@angular/cli/utilities/color';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor = {
    title: 'Dr.',
    name: 'John Doe',
    doctorRegistrationNumber: 'reg/xxx/34234235',
    qualificationString: 'MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India',
    specializations: 'General, Hematology, Gastrointestinal Surgery, Transplantation, Surgery'
  };

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

  editable = false;

  constructor() { }

  ngOnInit() {
  }

  getColor(state: string) {
    return '#000000';
  }

  toggleEditable(editable: boolean) {
    this.editable = editable;
  }
}
