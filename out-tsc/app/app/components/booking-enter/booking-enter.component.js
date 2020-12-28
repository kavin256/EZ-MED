import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DoctorType } from '../../utils/Constants';
import { LocalStorageKeys } from '../../services/data-store.service';
let BookingEnterComponent = class BookingEnterComponent {
    constructor(router, dataHandlerService) {
        this.router = router;
        this.dataHandlerService = dataHandlerService;
        this.doctor = {
            id: 1,
            name: 'Dr. Nuwan chinthaka',
            professionalType: DoctorType.CON,
            bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
            specialities: [
                'Consultant Neurologist',
                'Consultant Pediatrician'
            ],
            consultationPrice: 'Rs. 2000.00',
            isSkypePreferred: true,
            isWhatsAppPreferred: false
        };
        this.isScheduleVisible = false;
        this.isPatientSkypeAvailable = false;
        this.media = [
            { value: 'skype', viewValue: 'Skype' },
            { value: 'whatsapp', viewValue: 'Whatsapp' }
        ];
    }
    ngOnInit() {
        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    }
    scheduleVisibilityToggle($event) {
        this.isScheduleVisible = $event;
    }
    saveSkype(b) {
        //
    }
    goBack() {
        this.router.navigate(['appointmentTime']).then(r => {
        });
    }
};
BookingEnterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-booking-enter',
        templateUrl: './booking-enter.component.html',
        styleUrls: ['./booking-enter.component.css']
    })
], BookingEnterComponent);
export { BookingEnterComponent };
//# sourceMappingURL=booking-enter.component.js.map
