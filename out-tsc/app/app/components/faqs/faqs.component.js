import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FaqsComponent = class FaqsComponent {
    constructor() {
        this.faqs = [
            {
                q: 'How can I contact the doctor after placing a booking successfully?',
                a: 'Doctor will call you via Skype. When your booking number is near, make sure the doctor can reach you via Skype'
            },
            {
                q: 'How can I contact the doctor after placing a booking successfully?',
                a: 'Doctor will call you via Skype. When your booking number is near, make sure the doctor can reach you via Skype'
            },
            {
                q: 'How can I contact the doctor after placing a booking successfully?',
                a: 'Doctor will call you via Skype. When your booking number is near, make sure the doctor can reach you via Skype'
            }
        ];
    }
    ngOnInit() {
    }
};
FaqsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-faqs',
        templateUrl: './faqs.component.html',
        styleUrls: ['./faqs.component.css']
    })
], FaqsComponent);
export { FaqsComponent };
//# sourceMappingURL=faqs.component.js.map