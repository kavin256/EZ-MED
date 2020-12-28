import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthModel } from '../../models/auth-model';
import { DataKey } from '../../services/data-store.service';
import { RequestOptions } from '../../models/request-options';
import { Constants } from '../../utils/Constants';
let LandingPageComponent = class LandingPageComponent {
    constructor(router, dataLoader, dataStore) {
        this.router = router;
        this.dataLoader = dataLoader;
        this.dataStore = dataStore;
        this.emitFlowChange = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.flow && changes.flow.currentValue) {
            this.flow = changes.flow.currentValue;
        }
    }
    goToSearchPage() {
        this.router.navigate(['searchProfessionals']).then(r => {
        });
        const obj = new AuthModel();
        obj.username = 'foo12345';
        obj.password = 'foo';
        this.dataLoader.login(Constants.BASE_URL + '/authenticate', new RequestOptions(), obj, DataKey.authKey);
        this.dataStore.get(DataKey.authKey, true).subscribe((data) => {
            console.log(data);
        });
    }
};
tslib_1.__decorate([
    Input()
], LandingPageComponent.prototype, "flow", void 0);
tslib_1.__decorate([
    Output()
], LandingPageComponent.prototype, "emitFlowChange", void 0);
LandingPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-landing-page',
        templateUrl: './landing-page.component.html',
        styleUrls: ['./landing-page.component.css']
    })
], LandingPageComponent);
export { LandingPageComponent };
//# sourceMappingURL=landing-page.component.js.map