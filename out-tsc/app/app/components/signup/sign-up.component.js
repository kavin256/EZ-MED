import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import './sign-up.component.css';
import * as CryptoJS from 'crypto-js';
import { UserData } from '../../models/user-data';
import { Constants, MODAL_TYPES, PatientTitles } from '../../utils/Constants';
import { RequestOptions } from '../../models/request-options';
import { DataKey, LocalStorageKeys } from '../../services/data-store.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { AuthModel } from '../../models/auth-model';
import { DatePipe } from '@angular/common';
let SignUpComponent = class SignUpComponent {
    constructor(router, datePipe, dataLoaderService, dataHandlerService) {
        this.router = router;
        this.datePipe = datePipe;
        this.dataLoaderService = dataLoaderService;
        this.dataHandlerService = dataHandlerService;
        this.emitFlowChange = new EventEmitter();
        this.titleFormControl = new FormControl('');
        this.firstNameFormControl = new FormControl('');
        this.lastNameFormControl = new FormControl('');
        this.emailFormControl = new FormControl('');
        this.genderFormControl = new FormControl('');
        this.bDayFormControl = new FormControl('');
        this.whatsAppNumberFormControl = new FormControl('');
        this.contactNumberFormControl = new FormControl('');
        this.passFormControl = new FormControl('');
        this.conPassFormControl = new FormControl('');
        this.isDoctor = false;
        this.encryptionKey = 'ezmed';
        this.hide = true;
        this.isSignUp = true;
        this.genders = [
            { value: 'male', viewValue: 'Male' },
            { value: 'female', viewValue: 'Female' }
        ];
        this.male = true;
        this.isIncompleteErrorAvailable = false;
        this.passwordMissMatch = false;
        this.titles = PatientTitles;
        this.datePipe = new DatePipe('en-US');
    }
    ngOnInit() {
        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectFromSignUpIfLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    }
    registerNewUser(user) {
        user.password = this.encryptPassword(user.password);
        user.birthday = this.datePipe.transform(this.bDayFormControl.value, 'yyyy-MM-dd');
        // create url and send request
        const url = Constants.BASE_URL + Constants.CREATE_NEW_USER;
        this.dataLoaderService.post(url, new HttpParams(), new HttpHeaders(), DataKey.createdUser, user)
            .then((data) => {
            if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                localStorage.setItem(LocalStorageKeys.loggedInUser, JSON.stringify(data.data[0]));
                if (data.data[0].doctor) {
                    localStorage.setItem(LocalStorageKeys.userName, JSON.stringify(data.data[0].userName));
                    this.router.navigate(['doctor/dashboard']).then(r => {
                        location.reload();
                    });
                }
                else if (!data.data[0].doctor) {
                    localStorage.setItem(LocalStorageKeys.userName, JSON.stringify(data.data[0].userName));
                    this.router.navigate(['user/dashboard']).then(r => {
                        location.reload();
                    });
                }
            }
            else if (data && data.status && data.status.code === -1) {
                alert('Something went wrong. Please contact support !!');
            }
        });
    }
    encryptPassword(password) {
        password = CryptoJS.AES.encrypt(password, this.encryptionKey).toString();
        // console.log(CryptoJS.AES.decrypt(password, this.encryptionKey).toString(CryptoJS.enc.Utf8));
        return password;
    }
    validateInput(isDoctor) {
        this.titleFormControl.markAsTouched();
        this.firstNameFormControl.markAsTouched();
        this.lastNameFormControl.markAsTouched();
        this.emailFormControl.markAsTouched();
        this.genderFormControl.markAsTouched();
        this.bDayFormControl.markAsTouched();
        this.whatsAppNumberFormControl.markAsTouched();
        this.contactNumberFormControl.markAsTouched();
        this.passFormControl.markAsTouched();
        this.conPassFormControl.markAsTouched();
        if (isDoctor) {
            return !this.titleFormControl.invalid &&
                !this.firstNameFormControl.invalid &&
                !this.lastNameFormControl.invalid &&
                !this.emailFormControl.invalid &&
                !this.genderFormControl.invalid &&
                !this.whatsAppNumberFormControl.invalid &&
                !this.contactNumberFormControl.invalid &&
                !this.passFormControl.invalid &&
                !this.conPassFormControl.invalid;
        }
        else {
            return !this.titleFormControl.invalid &&
                !this.firstNameFormControl.invalid &&
                !this.lastNameFormControl.invalid &&
                !this.emailFormControl.invalid &&
                !this.genderFormControl.invalid &&
                !this.bDayFormControl.invalid &&
                !this.whatsAppNumberFormControl.invalid &&
                !this.contactNumberFormControl.invalid &&
                !this.passFormControl.invalid &&
                !this.conPassFormControl.invalid;
        }
    }
    SignUp() {
        this.passwordMissMatch = false;
        this.isIncompleteErrorAvailable = false;
        if (!this.validateInput(this.isDoctor)) {
            window.scroll(0, 0);
            this.isIncompleteErrorAvailable = true;
        }
        else if (!this.pass || !this.conPass || this.pass !== this.conPass) {
            this.passwordMissMatch = true;
            this.pass = null;
            this.conPass = null;
        }
        else {
            const userObj = new UserData();
            userObj.userName = this.email;
            userObj.password = this.pass;
            userObj.firstName = this.firstName;
            userObj.lastName = this.lastName;
            userObj.title = this.title;
            userObj.male = this.male;
            userObj.birthday = this.birthday;
            userObj.contactNumber = this.contactNumber;
            userObj.whatsAppNumber = this.whatsAppNumber;
            userObj.doctor = this.isDoctor;
            userObj.userAllergies = this.knownAllergies;
            this.registerNewUser(userObj);
        }
    }
    setGender(value) {
        switch (value) {
            case 'female': {
                this.male = false;
                break;
            }
            case 'male': {
                this.male = true;
                break;
            }
        }
    }
    setIsDoctor($event) {
        this.isDoctor = JSON.parse($event.value);
        this.resetFields();
    }
    resetFields() {
        this.birthday = null;
        this.pass = null;
        this.conPass = null;
        this.knownAllergies = '';
        this.isIncompleteErrorAvailable = false;
    }
    logIn() {
        this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING, true);
        // create url and send request
        const url = Constants.BASE_URL + Constants.AUTHENTICATE;
        const obj = new AuthModel();
        // Todo: handle
        // obj.username = this.email;
        obj.username = 'foo12345';
        // obj.password = this.pass;
        obj.password = 'foo';
        this.dataLoaderService.login(url, new RequestOptions(), obj, DataKey.authKey)
            .then((data) => {
            if (data && data.jwt) {
                localStorage.setItem(Constants.EZ_MED_AUTH, data.jwt);
                if (this.dataHandlerService.loadUserData(this.email, this.dataLoaderService)) {
                    const user = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
                    if (user && user.doctor) {
                        this.router.navigate(['doctor/dashboard']).then(r => {
                            location.reload();
                        });
                    }
                    else if (user && !user.doctor) {
                        this.router.navigate(['user/dashboard']).then(r => {
                            location.reload();
                        });
                    }
                }
            }
            else {
                alert('Something went wrong. Please contact support !!');
            }
            this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
        });
    }
};
tslib_1.__decorate([
    Input()
], SignUpComponent.prototype, "flow", void 0);
tslib_1.__decorate([
    Output()
], SignUpComponent.prototype, "emitFlowChange", void 0);
SignUpComponent = tslib_1.__decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css']
    })
], SignUpComponent);
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map
