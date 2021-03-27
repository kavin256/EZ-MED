import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {Constants, currencyCodes, DoctorTitles, DoctorType, MODAL_TYPES} from '../../utils/Constants';
import {DataKey, DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {UserData} from '../../models/user-data';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  selectedImage: File;
  // profileUserId = 'dfg';
  editable = false;
  loggedInUser = null;
  priceCurrency = 'LKR';
  onVacation = false;
  userData: UserData;
  vacationModeTitle = 'Enable Vacation Mode';
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

  specializationsCON;

    constructor(
        private router: Router,
        private dataStore: DataStoreService,
        private dataHandlerService: DataHandlerService,
        private dataLoaderService: DataLoaderService,
        private https: HttpClient
    ) {
    }

    ngOnInit() {
        this.specializationsCON = JSON.parse(this.dataHandlerService.loadConfig('CONSULTANT_TYPES'));

        this.loggedInUser = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));
        // todo: resolve this commented
        // if (this.loggedInUser && this.loggedInUser.doctorData) {
        //   this.userData = this.loggedInUser.doctorData;
        // }

        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);
        if (this.loggedInUser) {
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
            this.userData.professionalType = this.userData.professionalType;
            const url = Constants.API_BASE_URL + Constants.UPDATE_USER_SPECIFIC_DATA + this.userData.userId;
            this.dataLoaderService.put<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, this.userData)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1) {
                        // console.log('data');
                        // console.log(data.data);
                        // todo: check the following data[0]
                        // todo: data format from BE should be updated / changed
                        sessionStorage.setItem(LocalStorageKeys.loggedInUser, JSON.stringify(data.data[0]));
                        this.toggleEditable(false);

                    } else if (data && data.status && data.status.code === -1) {
                        // console.log('data null');
                        // console.log(data.data);
                    }
                });
        } else if (parseInt(this.userData.priceForAppointment, 10) <= 0) {
            // Todo: show a proper error
            alert('Price per consultation should be more than LKR 0');
        } else {
            alert('Please fill mandatory fields.');
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

  /**
   * Upload user image handling
   * @param event selected image
   */
  uploadImage(event) {
        this.selectedImage = event.target.files[0];
        const formData: FormData = new FormData();
        formData.append('file', this.selectedImage);

        // sent request
        const url = Constants.API_BASE_URL + Constants.UPLOAD_USER_IMAGE + this.userData.userId;
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

  checkForMandatoryFieldsToActivateProfile(userData: UserData) {
    // currently only the userData.priceForAppointment is checked as a requirement
    return userData &&
        userData.priceForAppointment !== null &&
        userData.priceForAppointment !== undefined &&
        userData.priceForAppointment !== '' &&
        parseInt(userData.priceForAppointment, 10) &&
        parseInt(userData.priceForAppointment, 10) > 0;
  }

  goToVacationMode() {
    if (!this.onVacation) {
      this.dataLoaderService.activateLoader(true, MODAL_TYPES.ENTER_VACATION_MODE, true,
          (result) => this.callBackFromVacationPopUp(result));
    } else {
      this.dataLoaderService.activateLoader(true, MODAL_TYPES.EXIT_VACATION_MODE, true,
          (result) => this.callBackFromVacationPopUp(result));
    }
  }

  callBackFromVacationPopUp($event) {
    switch ($event) {
      case 'start_vacation':
        this.onVacation = true;
        this.vacationModeTitle = 'Exit Vacation Mode';
        break;
      case 'stop_vacation':
        this.onVacation = false;
        this.vacationModeTitle = 'Enable Vacation Mode';
    }
  }
}
