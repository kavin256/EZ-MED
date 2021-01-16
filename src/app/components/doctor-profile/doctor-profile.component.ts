import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {Constants, currencyCodes, DoctorTitles, DoctorType, specializations} from '../../utils/Constants';
import {DataKey, DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DoctorSpecificData, UserData} from '../../models/user-data';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  selectedImage: File;
  // profileUsername = 'dfg';
  editable = false;
  loggedInUser = null;
  priceCurrency = 'LKR';
  userData: DoctorSpecificData;

  titles = [
    {value: DoctorTitles.DR},
    {value: DoctorTitles.MR},
    {value: DoctorTitles.MRS},
    {value: DoctorTitles.MS},
    {value: DoctorTitles.PROF},
  ];

  doctorTypes = [
    {value: DoctorType.CON},
    {value: DoctorType.GEN},
    {value: DoctorType.OTH}
  ];

  // todo: find a better solution. this is just a duplication. So not good
  specializations = specializations;

  constructor(
      private router: Router,
      private dataStore: DataStoreService,
      private dataHandlerService: DataHandlerService,
      private dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
    // todo: resolve this commented
    // if (this.loggedInUser && this.loggedInUser.doctorData) {
    //   this.userData = this.loggedInUser.doctorData;
    // }

    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    if (this.loggedInUser && this.loggedInUser) {
      this.userData = this.loggedInUser;
    }

    // converting professionalType to a user friendly readable format
    if (this.userData && this.userData.professionalType) {
      this.userData.professionalType = this.dataHandlerService.convertProfessionalTypeFromDBFormat(
          JSON.parse(JSON.stringify(this.userData.professionalType)));
    }
  }

  getColor(state: string) {
    return '#000000';
  }

  toggleEditable(editable: boolean) {
    this.editable = editable;
  }

  saveData() {
    if (this.userData.professionalType &&
        this.userData.priceForAppointment &&
        parseInt(this.userData.priceForAppointment, 10) > 0 &&
        this.userData.professionalType) {
      // converting professionalType to a database readable format
      if (this.userData && this.userData.professionalType) {
        this.userData.professionalType = this.dataHandlerService.convertProfessionalTypeToDBFormat(
            JSON.parse(JSON.stringify(this.userData.professionalType)));
      }
      // todo: change this in the backend
      this.userData.doctorType = this.userData.professionalType;
      const url = Constants.BASE_URL + Constants.UPDATE_PROFESSIONAL_SPECIFIC_DATA + this.userData.userName;
      this.dataLoaderService.put<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, this.userData )
          .then((data: any) => {
            if (data && data.status && data.status.code === 1) {
              // console.log('data');
              // console.log(data.data);
              // todo: check the following data[0]
              // todo: data format from BE should be updated / changed
              localStorage.setItem(LocalStorageKeys.loggedInUser, JSON.stringify(data.data[0]));
              this.toggleEditable(false);

            } else if (data && data.status && data.status.code === -1) {
              // console.log('data null');
              // console.log(data.data);
            }
          });
    } else {
      // Todo: show a proper error
      alert('Please fill mandatory fields. Price per consultation should be more than LKR 0');
    }
  }

  isConsultant(type: string) {
    return type === DoctorType.CON;
  }

  goToMyAppointments() {
    this.router.navigate(['appointments']).then(r => {
    });
  }

  editSchedule() {
    this.router.navigate(['doctor/schedule']).then(r => {
    });
  }

  uploadImage(event) {
    this.selectedImage = event.target.file;
    const formData = new FormData();
    formData.append('image', this.selectedImage);
    formData.append( 'username', this.userData.userName);

    // sent request
    const url = Constants.BASE_URL + Constants.UPLOAD_USER_IMAGE;
    this.dataLoaderService.post<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, formData )
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            // console.log('data');
            // console.log(data.data);
          } else if (data && data.status && data.status.code === -1) {
            // console.log('data null');
            // console.log(data.data);
          }
        });
  }

  checkForMandatoryFieldsToActivateProfile(userData: DoctorSpecificData) {
    // currently only the userData.priceForAppointment is checked as a requirement
    return userData &&
        userData.priceForAppointment !== null &&
        userData.priceForAppointment !== undefined &&
        userData.priceForAppointment !== '' &&
        parseInt(userData.priceForAppointment, 10) &&
        parseInt(userData.priceForAppointment, 10) > 0;
  }
}
