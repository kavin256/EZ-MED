import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let DataStoreService = class DataStoreService {
    constructor() {
        this.data = new Map();
        this.asyncData = new Map();
        for (const key in DataKey) {
            if (parseInt(key, 10) >= 0) {
                if (!this.asyncData.has(DataKey[DataKey[key]])) {
                    this.asyncData.set(DataKey[DataKey[key]], new BehaviorSubject(null));
                }
            }
        }
    }
    get(key, isAsync = true) {
        if (isAsync) {
            return this.asyncData.get(key);
        }
        else {
            return this.data.get(key);
        }
    }
    set(key, data, isAsync = true) {
        if (isAsync) {
            if (!this.asyncData.has(key)) {
                this.asyncData.set(key, null);
            }
            this.asyncData.get(key).next(data);
        }
        else {
            this.data.set(key, data);
        }
    }
    has(key, isAsync = true) {
        if (isAsync) {
            return this.asyncData.has(key);
        }
        else {
            return this.data.has(key);
        }
    }
};
DataStoreService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataStoreService);
export { DataStoreService };
export var DataKey;
(function (DataKey) {
    DataKey[DataKey["error"] = 0] = "error";
    DataKey[DataKey["authKey"] = 1] = "authKey";
    DataKey[DataKey["loggedUser"] = 2] = "loggedUser";
    DataKey[DataKey["loggedInUser"] = 3] = "loggedInUser";
    DataKey[DataKey["createdUser"] = 4] = "createdUser";
    DataKey[DataKey["uploadImage"] = 5] = "uploadImage";
    DataKey[DataKey["doctorScheduleData"] = 6] = "doctorScheduleData";
    DataKey[DataKey["signUpResultObject"] = 7] = "signUpResultObject";
    DataKey[DataKey["availableAppointmentsForProfessional"] = 8] = "availableAppointmentsForProfessional";
})(DataKey || (DataKey = {}));
export var LocalStorageKeys;
(function (LocalStorageKeys) {
    LocalStorageKeys["loggedInUser"] = "loggedInUser";
    LocalStorageKeys["userId"] = "userId";
    LocalStorageKeys["userName"] = "userName";
})(LocalStorageKeys || (LocalStorageKeys = {}));
//# sourceMappingURL=data-store.service.js.map
