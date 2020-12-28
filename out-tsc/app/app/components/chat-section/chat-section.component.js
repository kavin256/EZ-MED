import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ChatSectionComponent = class ChatSectionComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], ChatSectionComponent.prototype, "messageThread", void 0);
tslib_1.__decorate([
    Input()
], ChatSectionComponent.prototype, "patientName", void 0);
ChatSectionComponent = tslib_1.__decorate([
    Component({
        selector: 'app-chat-section',
        templateUrl: './chat-section.component.html',
        styleUrls: ['./chat-section.component.css']
    })
], ChatSectionComponent);
export { ChatSectionComponent };
//# sourceMappingURL=chat-section.component.js.map