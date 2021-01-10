import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {PatientTitles} from '../../utils/Constants';
import {FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {UserData} from '../../models/user-data';
import {DataLoaderService} from '../../services/data-loader.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient;
  patientAge;
  gender;
  searchedProfessionalName;

  // form controls
  firstNameFormControl = new FormControl('');
  lastNameFormControl = new FormControl('');
  emailFormControl = new FormControl('');
  dateFormControl = new FormControl('');
  whatsAppNumberFormControl = new FormControl('');
  contactNumberFormControl = new FormControl('');

  titles = PatientTitles;
  editable = false;
  genders = ['male', 'female'];
  selectedProfessionalUsername: string;

  constructor(
      private router: Router,
      private datePipe: DatePipe,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    // this.searchedProfessionalName = localStorage.getItem(LocalStorageKeys.)
    this.selectedProfessionalUsername = localStorage.getItem(LocalStorageKeys.selectedProfessionalUsername);
    this.loadProfessionalData(this.selectedProfessionalUsername);

    this.patient = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
    if (this.patient) {
      this.prepareFrontEndData(this.patient);
    }
  }

  private loadProfessionalData(selectedProfessionalUsername: any) {
    this.dataHandlerService.loadUserDataSimple(selectedProfessionalUsername, this.dataLoaderService)
        .then((data: any) => {
          this.searchedProfessionalName = data.title + '. ' + data.firstName + ' ' + data.lastName;
        });
  }

  goToMyAppointments() {
    this.router.navigate(['user/appointments']).then(r => {
    });
  }

  goToAppointmentTimeSelection() {
    this.router.navigate(['appointmentTime']).then(r => {});
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
