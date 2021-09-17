import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {Constants, DoctorTitles, DoctorType, MODAL_TYPES} from '../../utils/Constants';
import {DataKey, DataStoreService, SessionStorageKeys} from '../../services/data-store.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {UserData} from '../../models/user-data';
import {DataHandlerService} from '../../services/data-handler.service';
import {Subscription} from 'rxjs-compat/Subscription';

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
    editable = false;
    loggedInUser = null;
    CONSULTANT_TYPES: any;
    OTHER_MEDICAL_PROFESSIONAL_TYPES: any;
    COUNSELLOR_TYPES: any;
    priceCurrency = 'LKR';
    onVacation = false;
    userData: UserData;
    profileImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_PROFILE_PIC;
    signatureImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_SIGN;
    stampImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_STAMP;
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
            category: DoctorType.AYUR
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
    contactPhone: string;
    contactEmail: string;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public dataStore: DataStoreService,
        public dataHandlerService: DataHandlerService,
        public dataLoaderService: DataLoaderService,
        public https: HttpClient
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
        this.contactEmail = this.dataHandlerService.loadConfig('EZMED_CONTACT_EMAIL');
        this.contactPhone = this.dataHandlerService.loadConfig('EZMED_CONTACT_PHONE');
        this.loggedInUser = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));

        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(
            JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser)), this.router);
        if (this.loggedInUser) {
            this.userData = this.loggedInUser;
            // load profile pic
            this.profileImageURL += this.userData.userId;
            // load signature Image URL pic
            this.signatureImageURL += this.userData.userId;
            // load stamp Image URL pic
            this.stampImageURL += this.userData.userId;
        }

        // converting professionalType to a user friendly readable format
        if (this.userData && this.userData.professionalType) {
            this.selectedCategory = this.dataHandlerService.convertProfessionalTypeFromDBFormat(
                JSON.parse(JSON.stringify(this.userData.professionalType)));
            this.selectCategory({value: this.selectedCategory});
        }
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

    goToMyAppointments() {
        this.router.navigate(['appointments']).then(r => {
        });
    }

    editSchedule() {
        this.router.navigate(['doctor/schedule']).then(r => {
        });
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
