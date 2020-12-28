import * as tslib_1 from "tslib";
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let ModalComponent = class ModalComponent {
    constructor(router, data) {
        this.router = router;
        this.clickEmitter = new EventEmitter();
        this.modalType = data.modalType;
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], ModalComponent.prototype, "modalType", void 0);
tslib_1.__decorate([
    Output()
], ModalComponent.prototype, "clickEmitter", void 0);
ModalComponent = tslib_1.__decorate([
    Component({
        selector: 'app-modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.css']
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA))
], ModalComponent);
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map