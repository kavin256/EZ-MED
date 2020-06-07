import { Component, OnInit } from '@angular/core';
import {professionalType} from '../search-professionals/search-professionals.component';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient = {
    id: 1,
    title: 'Mr.',
    birthday: '03-05-1994',
    name: 'John Doe',
    skypeID: 'hgfghj34',
    medicalHistory: 'long term gastritis patient',
    allergies: 'allergic to hindi songs',
  };

  titles = [
    {value: 'Dr.'},
    {value: 'Mr.'},
    {value: 'Mrs.'},
    {value: 'Ms.'},
    {value: 'Prof.'}
  ];

  title = 'MY PROFILE';
  editable = false;

  constructor() { }

  ngOnInit() {
  }

  toggleEditable(editable: boolean) {
    this.editable = editable;
  }
}
