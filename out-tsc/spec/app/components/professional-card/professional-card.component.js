import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { currencyCodes } from '../../utils/Constants';
let ProfessionalCardComponent = class ProfessionalCardComponent {
    constructor() {
        this.selectProfessional = new EventEmitter();
        this.overTheDoctorCard = null;
        this.currency = currencyCodes.LKR;
    }
    ngOnInit() { }
    onMouseEnter($event) {
        this.overTheDoctorCard = $event;
    }
    onMouseLeave() {
        this.overTheDoctorCard = null;
    }
    isOverTheDoctorCard($event) {
        return $event === this.overTheDoctorCard;
    }
    selectProfessional_($event) {
        this.selectProfessional.emit($event);
    }
};
tslib_1.__decorate([
    Input()
], ProfessionalCardComponent.prototype, "professional", void 0);
tslib_1.__decorate([
    Output()
], ProfessionalCardComponent.prototype, "selectProfessional", void 0);
ProfessionalCardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-professional-card',
        templateUrl: './professional-card.component.html',
        styleUrls: ['./professional-card.component.css']
    })
], ProfessionalCardComponent);
export { ProfessionalCardComponent };
//# sourceMappingURL=professional-card.component.js.map