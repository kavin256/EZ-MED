import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataKey, SessionStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {Constants, MODAL_TYPES, PatientTitles} from '../../utils/Constants';
import {FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {UserData} from '../../models/user-data';
import {DataLoaderService} from '../../services/data-loader.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {Prescription} from '../../models/prescription';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  selectedImage: File;
  patient: UserData;
  patientAge;
  gender;
  searchedProfessionalName;
  medicalHistory: any;
  loaderVisible: boolean;

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
  selectedProfessionalUserId: string;

  constructor(
      public router: Router,
      public datePipe: DatePipe,
      public dataLoaderService: DataLoaderService,
      public dataHandlerService: DataHandlerService,
      public https: HttpClient
  ) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser)), this.router);

    this.selectedProfessionalUserId = sessionStorage.getItem(SessionStorageKeys.selectedProfessionalUserId);
    if (this.selectedProfessionalUserId) {
      this.loadProfessionalData(this.selectedProfessionalUserId);
    }

    this.patient = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));
    if (this.patient) {
      this.prepareFrontEndData(this.patient);
      this.loadMedicalHistory(parseInt(this.patient.userId, 10));
    }
  }

  private loadProfessionalData(selectedProfessionalUserId: any) {
    this.dataHandlerService.loadUserDataUsingUserId(selectedProfessionalUserId, this.dataLoaderService)
        .then((data: any) => {
          this.searchedProfessionalName = data.title + '. ' + data.firstName + ' ' + data.lastName;
        });
  }

  goToMyAppointments() {
    this.router.navigate(['appointments']).then(r => {
    });
  }

  newAppointment() {
    this.router.navigate(['searchProfessionals']).then(r => {
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
    if (this.dataHandlerService.isMandatoryDetailsFilled(this.patient)) {
      this.patient.birthday = this.datePipe.transform(this.dateFormControl.value, 'yyyy-MM-dd');
      this.setGender(this.gender);
      this.loaderVisible = true;
      // this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING, true);
      const url = Constants.API_BASE_URL + Constants.UPDATE_USER_SPECIFIC_DATA + this.patient.userId;
      this.dataLoaderService.put<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, this.patient)
          .then((data: any) => {
            if (data && data.status && data.status.code === 1) {
              this.patient = data.data[0];
              sessionStorage.setItem(SessionStorageKeys.loggedInUser, JSON.stringify(data.data[0]));
              this.toggleEditable(false);
            } else if (data && data.status && data.status.code === -1) {
              alert('Something went wrong when saving the data!');
            }
          }).catch(() => {
            alert('Something went wrong when saving the data!');
          }).finally(() => {
            this.loaderVisible = false;
            // this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
          });
    } else {
      alert('Please fill mandatory fields.');
    }
  }

  toggleEditable(editable: boolean) {
    this.editable = editable;
  }

  private prepareFrontEndData(patient: UserData) {
    this.patientAge = this.dataHandlerService.calculateAgeFromJavaBirthdayDate(patient.birthday);
    this.dateFormControl = new FormControl(new Date(patient.birthday));
    this.gender = patient.male ? 'male' : 'female';
  }

  dismiss() {
    sessionStorage.removeItem(SessionStorageKeys.selectedProfessionalUserId);
    this.selectedProfessionalUserId = null;
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
    const url = Constants.API_BASE_URL + Constants.UPLOAD_USER_PROFILE_PIC + this.patient.userId;
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

  goToMyMedicalHistory(): void {
    this.dataLoaderService.activateLoader(true, 'PAST_RECORDS',
        false,
        undefined,
        undefined,
        this.medicalHistory);
  }

  private loadMedicalHistory(patientId: number) {
    this.dataHandlerService.loadMedicalHistoryForPatient(patientId, this.dataLoaderService)
        .then((data: Prescription []) => {
          if (data) {
            this.medicalHistory = data;
          }
        }).catch((e) => {
    }).finally(() => {
    });
  }
}
