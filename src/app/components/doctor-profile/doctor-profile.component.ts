import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {Constants, currencyCodes, DoctorTitles, DoctorType, MODAL_TYPES} from '../../utils/Constants';
import {DataKey, DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {UserData} from '../../models/user-data';
import {DataHandlerService} from '../../services/data-handler.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
    selectedImage: File;
    editable = false;
    loggedInUser = null;
    private CONSULTANT_TYPES: any;
    private OTHER_MEDICAL_PROFESSIONAL_TYPES: any;
    private COUNSELLOR_TYPES: any;
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

    categories = [
        {
            category: DoctorType.CON
        },
        {
            category: DoctorType.GEN
        },
        {
            category: DoctorType.COUN
        },
        {
            category: DoctorType.OTH
        }
    ];
    specializations;
    sub = new Subscription();
    logInRequired: boolean;
    selectedCategory: any = null;
    selectedSpecialization: any = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dataStore: DataStoreService,
        private dataHandlerService: DataHandlerService,
        private dataLoaderService: DataLoaderService,
        private https: HttpClient
    ) {
    }

    ngOnInit() {
        this.sub = this.route
            .queryParams
            .subscribe(params => {
                this.logInRequired = params.logInRequired === 'true';
            });
        this.CONSULTANT_TYPES = JSON.parse(this.dataHandlerService.loadConfig('CONSULTANT_TYPES'));
        this.OTHER_MEDICAL_PROFESSIONAL_TYPES = JSON.parse(this.dataHandlerService.loadConfig('OTHER_MEDICAL_PROFESSIONAL_TYPES'));
        this.COUNSELLOR_TYPES = JSON.parse(this.dataHandlerService.loadConfig('COUNSELLOR_TYPES'));

        this.loggedInUser = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));

        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(
            JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);
        if (this.loggedInUser) {
            this.userData = this.loggedInUser;
        }

        // converting professionalType to a user friendly readable format
        if (this.userData && this.userData.professionalType) {
            this.selectedCategory = this.dataHandlerService.convertProfessionalTypeFromDBFormat(
                JSON.parse(JSON.stringify(this.userData.professionalType)));
            this.selectCategory({value: this.selectedCategory});
        }
    }

    getColor(state: string) {
        return '#000000';
    }

    selectCategory($event) {
        this.selectedSpecialization = null;
        this.selectedCategory = $event.value;
        switch (this.selectedCategory) {
            case DoctorType.CON:
                this.specializations = [];
                this.specializations = this.specializations.concat(this.CONSULTANT_TYPES);
                break;
            case DoctorType.COUN:
                this.specializations = [];
                this.specializations = this.specializations.concat(this.COUNSELLOR_TYPES);
                break;
            case DoctorType.OTH:
                this.specializations = [];
                this.specializations = this.specializations.concat(this.OTHER_MEDICAL_PROFESSIONAL_TYPES);
                break;
            default:
                this.specializations = [];
                break;
        }
    }

    toggleEditable(editable: boolean) {
        this.editable = editable;
    }

    saveData() {
        if (this.selectedCategory &&
            this.userData.priceForAppointment &&
            parseInt(this.userData.priceForAppointment, 10) > 0) {

            // converting professionalType to a database readable format
            if (this.selectedCategory) {
                this.userData.professionalType = this.dataHandlerService.convertProfessionalTypeToDBFormat(
                    JSON.parse(JSON.stringify(this.selectedCategory)));
            }
            const url = Constants.API_BASE_URL + Constants.UPDATE_USER_SPECIFIC_DATA + this.userData.userId;
            this.dataLoaderService.put<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, this.userData)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1) {
                        sessionStorage.setItem(LocalStorageKeys.loggedInUser, JSON.stringify(data.data[0]));
                        this.toggleEditable(false);
                    }
                });
        } else if (parseInt(this.userData.priceForAppointment, 10) <= 0) {
            alert('Price per consultation should be more than LKR 0');
        } else {
            alert('Please fill mandatory fields.');
        }
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
