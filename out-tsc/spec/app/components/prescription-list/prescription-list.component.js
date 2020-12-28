import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LocalStorageKeys } from '../../services/data-store.service';
let PrescriptionListComponent = class PrescriptionListComponent {
    constructor(router, dataHandlerService) {
        this.router = router;
        this.dataHandlerService = dataHandlerService;
    }
    ngOnInit() {
        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
        this.isDoctor = true;
        // this.isDoctor = false;
        this.prescriptionList = new Array();
        this.prescriptionList.push({
            appointmentNumber: 356,
            prescriptionTimeStamp: new Date(2020, 3, 2, 9, 45)
        });
        this.prescriptionList.push({
            appointmentNumber: 423,
            prescriptionTimeStamp: new Date(2020, 3, 2, 10, 30)
        });
        this.prescriptionList.push({
            appointmentNumber: 987,
            prescriptionTimeStamp: new Date(2020, 3, 2, 11, 20)
        });
    }
    selectPrescription() {
        this.router.navigate(['appointment/prescription']).then(r => {
        });
    }
};
PrescriptionListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-prescription-list',
        templateUrl: './prescription-list.component.html',
        styleUrls: ['./prescription-list.component.css']
    })
], PrescriptionListComponent);
export { PrescriptionListComponent };
//# sourceMappingURL=prescription-list.component.js.map
