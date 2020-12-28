import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CommonBodyComponent = class CommonBodyComponent {
    constructor() {
        this.flow = 2;
    }
    ngOnInit() {
    }
    onFlowChange($event) {
        this.flow = $event;
    }
};
CommonBodyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-common-body',
        templateUrl: './common-body.component.html',
        styleUrls: ['./common-body.component.css']
    })
], CommonBodyComponent);
export { CommonBodyComponent };
//# sourceMappingURL=common-body.component.js.map