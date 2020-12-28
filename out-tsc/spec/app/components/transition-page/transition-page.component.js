import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let TransitionPageComponent = class TransitionPageComponent {
    constructor() {
        this.dismissible = true;
        this.clickEmitter = new EventEmitter();
    }
    ngOnInit() { }
    logIn() {
        // this.router.navigate(['signup']).then(r => {
        // });
        this.clickEmitter.emit('logIn');
    }
    dismiss() {
        this.clickEmitter.emit('back');
    }
};
tslib_1.__decorate([
    Input()
], TransitionPageComponent.prototype, "modalType", void 0);
tslib_1.__decorate([
    Input()
], TransitionPageComponent.prototype, "dismissible", void 0);
tslib_1.__decorate([
    Output()
], TransitionPageComponent.prototype, "clickEmitter", void 0);
TransitionPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-transition-page',
        templateUrl: './transition-page.component.html',
        styleUrls: ['./transition-page.component.css']
    })
], TransitionPageComponent);
export { TransitionPageComponent };
//# sourceMappingURL=transition-page.component.js.map