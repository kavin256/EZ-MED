import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Constants, DoctorTitles, DoctorType, specializations } from '../../utils/Constants';
import { DataKey, LocalStorageKeys } from '../../services/data-store.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
let DoctorProfileComponent = class DoctorProfileComponent {
    constructor(router, dataStore, dataHandlerService, dataLoaderService) {
        this.router = router;
        this.dataStore = dataStore;
        this.dataHandlerService = dataHandlerService;
        this.dataLoaderService = dataLoaderService;
        // profileUsername = 'dfg';
        this.editable = false;
        this.loggedInUser = null;
        this.titles = [
            { value: DoctorTitles.DR },
            { value: DoctorTitles.MR },
            { value: DoctorTitles.MRS },
            { value: DoctorTitles.MS },
            { value: DoctorTitles.PROF },
        ];
        this.doctorTypes = [
            { value: DoctorType.CON },
            { value: DoctorType.GEN },
            { value: DoctorType.OTH }
        ];
        // todo: find a better solution. this is just a duplication. So not good
        this.specializations = specializations;
    }
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
            this.userData.professionalType = this.dataHandlerService.convertProfessionalTypeFromDBFormat(JSON.parse(JSON.stringify(this.userData.professionalType)));
        }
    }
    getColor(state) {
        return '#000000';
    }
    toggleEditable(editable) {
        this.editable = editable;
    }
    saveData() {
        // converting professionalType to a database readable format
        if (this.userData && this.userData.professionalType) {
            this.userData.professionalType = this.dataHandlerService.convertProfessionalTypeToDBFormat(JSON.parse(JSON.stringify(this.userData.professionalType)));
        }
        // todo: change this in the backend
        this.userData.doctorType = this.userData.professionalType;
        const url = Constants.BASE_URL + Constants.UPDATE_PROFESSIONAL_SPECIFIC_DATA + this.userData.userName;
        this.dataLoaderService.put(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, this.userData)
            .then((data) => {
            if (data && data.status && data.status.code === 1) {
                // console.log('data');
                // console.log(data.data);
                // todo: check the following data[0]
                // todo: data format from BE should be updated / changed
                localStorage.setItem(LocalStorageKeys.loggedInUser, JSON.stringify(data.data));
                this.toggleEditable(false);
            }
            else if (data && data.status && data.status.code === -1) {
                // console.log('data null');
                // console.log(data.data);
            }
        });
    }
    isConsultant(type) {
        return type === DoctorType.CON;
    }
    goToMyAppointments() {
        this.router.navigate(['doctor/appointments']).then(r => {
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
        formData.append('username', this.userData.userName);
        // sent request
        const url = Constants.BASE_URL + Constants.UPLOAD_USER_IMAGE;
        this.dataLoaderService.post(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, formData)
            .then((data) => {
            if (data && data.status && data.status.code === 1) {
                // console.log('data');
                // console.log(data.data);
            }
            else if (data && data.status && data.status.code === -1) {
                // console.log('data null');
                // console.log(data.data);
            }
        });
    }
    checkForMandatoryFieldsToActivateProfile(userData) {
        // currently only the userData.priceForAppointment is checked as a requirement
        return userData &&
            userData.priceForAppointment !== null &&
            userData.priceForAppointment !== undefined &&
            userData.priceForAppointment !== '' &&
            parseInt(userData.priceForAppointment, 10) &&
            parseInt(userData.priceForAppointment, 10) > 0;
    }
};
DoctorProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-doctor-profile',
        templateUrl: './doctor-profile.component.html',
        styleUrls: ['./doctor-profile.component.css']
    })
], DoctorProfileComponent);
export { DoctorProfileComponent };
//# sourceMappingURL=doctor-profile.component.js.map
