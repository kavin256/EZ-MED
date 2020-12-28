import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SessionStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {PatientTitles} from '../../utils/Constants';
import {FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient;
  patientAge;
  dateFormControl;

// {
//   "firstName": "Milinda",
//   "lastName": "Sandaruwan",
//   "userName": "milinda6@aubc.com",
//   "password": null,
//   "title": "Mr",
//   "birthday": "1994-12-31T00:00:00.000+0000",
//   "address": null,
//   "contactNumber": "0123456789",
//   "whatsAppNumber": "0123456789",
//   "userAllergies": "",
//   "registeredDate": "2020-12-24T08:42:10.374+0000",
//   "professionalType": null,
//   "specialityA": null,
//   "specialityB": null,
//   "specialityC": null,
//   "regNo": null,
//   "qualifications": null,
//   "priceForAppointment": null,
//   "availableForAppointment": false,
//   "averageMinutesPerAppointment": null,
//   "doctor": false,
//   "male": null
// }

  titles = PatientTitles;

  title = 'MY PROFILE';
  editable = false;

  constructor(
      private router: Router,
      private datePipe: DatePipe,
      private dataHandlerService: DataHandlerService
  ) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(SessionStorageKeys.loggedInUser)));

    this.patient = JSON.parse(localStorage.getItem(SessionStorageKeys.loggedInUser));
    if (this.patient) {
      this.prepareFrontEndData(this.patient);
    }
  }

  goToMyAppointments() {
    this.router.navigate(['user/appointments']).then(r => {
    });
  }

  save() {
    this.patient.birthday = this.datePipe.transform(this.dateFormControl.value, 'dd/MM/yyyy');
  }
  toggleEditable(editable: boolean) {
    if (!editable) {
      this.save();
    }
    this.editable = editable;
  }

  private prepareFrontEndData(patient: any) {
    this.patientAge = this.dataHandlerService.calculateAgeFromJavaBirthdayDate(patient.birthday);
    this.dateFormControl = new FormControl(new Date(patient.birthday));
  }
}
