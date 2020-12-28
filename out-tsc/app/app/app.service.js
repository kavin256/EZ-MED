import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { currencyCodes, DoctorTitles, DoctorType } from './utils/Constants';
let AppService = class AppService {
    constructor(dataStore) {
        this.dataStore = dataStore;
    }
    loadModuleConfigurations() {
    }
    loadPermissions() {
    }
    userLogin() {
    }
    loadUserDetails() {
        // this.dataStore.set(DataKey.loggedInUser, this.dataHandlerService.loadUserData(), true);
        // localStorage.setItem(LocalStorageKeys.loggedInUser, JSON.stringify(this.dataHandlerService.loadUserData()));
    }
    loadUserDataFromMock() {
        const data = {
            doctor: true,
            patientData: null,
            doctorData: {
                userName: 'johndoe@gmail.com',
                title: DoctorTitles.DR,
                firstName: 'John',
                lastName: 'Doe',
                contactNumber: '+94773092323',
                whatsAppNumber: '+94773092323',
                regNo: 'reg/34234235',
                priceForAppointment: '1650',
                priceCurrency: currencyCodes.LKR,
                qualifications: 'MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India',
                professionalType: DoctorType.CON,
                specialityA: 'Pulmonologist',
                specialityB: 'Dermatologist',
                specialityC: '',
                availableForAppointment: 'true'
            }
        };
        return data;
    }
};
AppService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AppService);
export { AppService };
//# sourceMappingURL=app.service.js.map
