import { Component, OnInit } from '@angular/core';
import {colors} from '@angular/cli/utilities/color';
import {professionalType} from '../search-professionals/search-professionals.component';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor = {
    title: 'Mr.',
    name: 'John Doe',
    professionalType: professionalType.CONSULTANT,
    doctorRegistrationNumber: 'reg/34234235',
    qualificationString: 'MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India',
    specialization_1: 'Pulmonologist',
    specialization_2: 'Dermatologist',
    specialization_3: ''
  };

  titles = [
    {value: 'Dr.'},
    {value: 'Mr.'},
    {value: 'Mrs.'},
    {value: 'Ms.'},
    {value: 'Prof.'}
  ];

  specializations = [
    {value: 'None'},
    {value: 'Immunologist'},
    {value: 'Cardiologist'},
    {value: 'Pulmonologist'},
    {value: 'Radiologist'},
    {value: 'Dermatologist'},
    {value: 'Clinical Nutritionist'},
    {value: 'Endocrinologist'}
  ];

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

  isConsultant(type: professionalType) {
    return type === professionalType.CONSULTANT;
  }
}
