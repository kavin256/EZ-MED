import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LocalStorageKeys } from '../../services/data-store.service';
let PaymentSuccessComponent = class PaymentSuccessComponent {
    constructor(dataHandlerService) {
        this.dataHandlerService = dataHandlerService;
    }
    ngOnInit() {
        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    }
};
PaymentSuccessComponent = tslib_1.__decorate([
    Component({
        selector: 'app-payment-success',
        templateUrl: './payment-success.component.html',
        styleUrls: ['./payment-success.component.css']
    })
], PaymentSuccessComponent);
export { PaymentSuccessComponent };
//# sourceMappingURL=payment-success.component.js.map
