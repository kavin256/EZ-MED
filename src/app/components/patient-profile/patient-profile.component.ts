import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {PatientTitles} from '../../utils/Constants';
import {FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {UserData} from '../../models/user-data';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient;
  patientAge;
  gender;

  // form controls
  firstNameFormControl = new FormControl('');
  lastNameFormControl = new FormControl('');
  emailFormControl = new FormControl('');
  dateFormControl = new FormControl('');
  whatsAppNumberFormControl = new FormControl('');
  contactNumberFormControl = new FormControl('');

  titles = PatientTitles;
  title = 'MY PROFILE';
  editable = false;
  genders = ['male', 'female'];

  constructor(
      private router: Router,
      private datePipe: DatePipe,
      private dataHandlerService: DataHandlerService
  ) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));

    this.patient = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
    if (this.patient) {
      this.prepareFrontEndData(this.patient);
    }
  }

  goToMyAppointments() {
    this.router.navigate(['user/appointments']).then(r => {
    });
  }

  setGender(value: any) {
    switch (value) {
      case 'female': {
        this.patient.male = false;
        break;
      }
      case 'male': {
        this.patient.male = true;
        break;
      }
    }
  }

  save() {
    this.patient.birthday = this.datePipe.transform(this.dateFormControl.value, 'yyyy-MM-dd');
    this.setGender(this.gender);
  }

  toggleEditable(editable: boolean) {
    if (!editable) {
      this.save();
    }
    this.editable = editable;
  }

  private prepareFrontEndData(patient: UserData) {
    this.patientAge = this.dataHandlerService.calculateAgeFromJavaBirthdayDate(patient.birthday);
    this.dateFormControl = new FormControl(new Date(patient.birthday));
    this.gender = patient.male ? 'male' : 'female';
  }
}
