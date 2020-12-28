import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import './header.component.css';
import { DataKey, LocalStorageKeys } from '../../services/data-store.service';
let HeaderComponent = class HeaderComponent {
    constructor(dataHandlerService, router, dataStore) {
        this.dataHandlerService = dataHandlerService;
        this.router = router;
        this.dataStore = dataStore;
        this.signUpResultObject = {
            isSignUp: undefined,
            userType: undefined
        };
        this.loggedInUser = null;
        this.user = null;
        this.isSignUp = true;
    }
    ngOnInit() {
        if (localStorage.getItem(LocalStorageKeys.loggedInUser)) {
            this.loggedInUser = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
        }
        this.firstName = null;
        if (this.loggedInUser) {
            this.firstName = this.setFirstName(this.loggedInUser);
        }
        if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
            this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
            this.userType = this.signUpResultObject.userType;
            this.isSignUp = this.signUpResultObject.isSignUp;
        }
    }
    ngAfterViewInit() {
        setTimeout(() => { window.scroll(0, 0); }, 1000);
    }
    logoClick() {
        if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
            this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
            this.userType = this.signUpResultObject.userType;
            this.isSignUp = this.signUpResultObject.isSignUp;
        }
        if (this.loggedInUser && this.loggedInUser.doctor !== null && this.loggedInUser.doctor) {
            this.router.navigate(['doctor/dashboard']).then(r => {
            });
        }
        else if (this.loggedInUser && this.loggedInUser.doctor !== null && !this.loggedInUser.doctor) {
            this.router.navigate(['user/dashboard']).then(r => {
            });
        }
        else {
            this.router.navigate(['signup']).then(r => {
            });
        }
    }
    goToHomePage() {
        this.router.navigate(['/']).then(r => {
        });
    }
    setFirstName(loggedInUser) {
        let fName = null;
        if (loggedInUser && loggedInUser.doctor) {
            // todo: uncomment
            // fName = loggedInUser.doctorData.firstName;
            fName = loggedInUser.firstName;
        }
        else if (loggedInUser && !loggedInUser.doctor) {
            // todo: uncomment
            // fName = loggedInUser.patientData.firstName;
            fName = loggedInUser.firstName;
        }
        return fName;
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map
