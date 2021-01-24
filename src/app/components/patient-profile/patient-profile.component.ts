import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {Constants, PatientTitles} from '../../utils/Constants';
import {FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {UserData} from '../../models/user-data';
import {DataLoaderService} from '../../services/data-loader.service';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  selectedImage: File;
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
      private dataHandlerService: DataHandlerService,
      private https: HttpClient
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
    this.router.navigate(['appointments']).then(r => {
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

  dismiss() {
    localStorage.removeItem(LocalStorageKeys.selectedProfessionalUsername);
    this.selectedProfessionalUsername = null;
    this.searchedProfessionalName = null;
  }

  /**
   * Upload user image handling
   * @param event selected image
   */
  uploadImage(event) {
    this.selectedImage = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', this.selectedImage);

    // sent request
    const url = Constants.API_BASE_URL + Constants.UPLOAD_USER_IMAGE + this.patient.userName;
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    this.https.request(req).subscribe(
        data => {
          if (data) {
          }
        }
    );
  }
}
