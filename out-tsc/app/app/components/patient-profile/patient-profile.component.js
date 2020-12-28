import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LocalStorageKeys } from '../../services/data-store.service';
import { PatientTitles } from '../../utils/Constants';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
let PatientProfileComponent = class PatientProfileComponent {
    constructor(router, datePipe, dataHandlerService) {
        this.router = router;
        this.datePipe = datePipe;
        this.dataHandlerService = dataHandlerService;
        // form controls
        this.firstNameFormControl = new FormControl('');
        this.lastNameFormControl = new FormControl('');
        this.emailFormControl = new FormControl('');
        this.dateFormControl = new FormControl('');
        this.whatsAppNumberFormControl = new FormControl('');
        this.contactNumberFormControl = new FormControl('');
        this.titles = PatientTitles;
        this.title = 'MY PROFILE';
        this.editable = false;
        this.genders = ['male', 'female'];
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
    setGender(value) {
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
    toggleEditable(editable) {
        if (!editable) {
            this.save();
        }
        this.editable = editable;
    }
    prepareFrontEndData(patient) {
        this.patientAge = this.dataHandlerService.calculateAgeFromJavaBirthdayDate(patient.birthday);
        this.dateFormControl = new FormControl(new Date(patient.birthday));
        this.gender = patient.male ? 'male' : 'female';
    }
};
PatientProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-patient-profile',
        templateUrl: './patient-profile.component.html',
        styleUrls: ['./patient-profile.component.css']
    })
], PatientProfileComponent);
export { PatientProfileComponent };
//# sourceMappingURL=patient-profile.component.js.map
