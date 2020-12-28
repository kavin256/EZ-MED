import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { RequestOptions } from '../models/request-options';
import { DataKey } from './data-store.service';
import { BehaviorSubject } from 'rxjs';
import { Constants } from '../utils/Constants';
import { MatDialogConfig } from '@angular/material';
import { ModalComponent } from '../components/modal/modal.component';
let DataLoaderService = class DataLoaderService {
    constructor(dialog, http, dataStore) {
        this.dialog = dialog;
        this.http = http;
        this.dataStore = dataStore;
    }
    // make a GET request
    get(url, param, headers) {
        const options = this.makeOptions(param, headers);
        return new Promise(resolve => {
            this.http.get(url, {
                headers: options.headers,
                params: options.params
            }).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            (data) => {
                resolve(data);
            });
        });
    }
    // make a POST request
    post(url, param, headers, dataKey, data) {
        const options = this.makeOptions(param, headers);
        this.dataStore.set(DataKey.error, {});
        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }
        return new Promise(resolve => {
            this.http.post(url, data, {
                headers: options.headers,
                params: options.params
            }).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            (data) => {
                resolve(data);
                // @ts-ignore
                this.dataStore.set(dataKey, data.data, true);
            });
        });
    }
    // make a PUT request
    put(url, param, headers, dataKey, data) {
        const options = this.makeOptions(param, headers);
        this.dataStore.set(DataKey.error, {});
        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }
        return new Promise(resolve => {
            this.http.put(url, data, {
                headers: options.headers,
                params: options.params
            }).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            (data) => {
                resolve(data);
                // @ts-ignore
                this.dataStore.set(dataKey, data.data, true);
            });
        });
    }
    // make a DELETE request
    delete(url, param, headers, dataKey) {
        const options = this.makeOptions(param, headers);
        this.dataStore.set(DataKey.error, {});
        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }
        this.http.delete(url, {
            headers: options.headers,
            params: options.params
        }).subscribe(result => {
            this.dataStore.set(dataKey, result, true);
        }, error => {
            this.dataStore.set(DataKey.error, error, true);
        });
    }
    // make request params and headers for request
    makeOptions(param, headers) {
        const options = new RequestOptions();
        options.params = param;
        options.headers = headers;
        options.headers = options.headers.append('Content-Type', 'application/json');
        // get auth key for authorization
        if (localStorage.getItem(Constants.EZ_MED_AUTH) != null) {
            let authKey = 'Bearer ';
            authKey = authKey + localStorage.getItem(Constants.EZ_MED_AUTH);
            options.headers = options.headers.append('Authorization', authKey);
        }
        return options;
    }
    // user login and get JWT token
    login(url, options, data, dataKey) {
        this.dataStore.set(DataKey.error, {});
        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }
        return new Promise(resolve => {
            this.http.post(url, data, {
                headers: options.headers,
                params: options.params
            }).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            (data) => {
                resolve(data);
                // @ts-ignore
                this.dataStore.set(dataKey, data.data, true);
            });
        });
    }
    // logout from the app
    logOut() {
        localStorage.removeItem(Constants.EZ_MED_AUTH);
    }
    activateLoader(activate, MODAL_TYPE, disableClose) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
            modalType: MODAL_TYPE
        };
        dialogConfig.disableClose = disableClose;
        dialogConfig.width = '300px';
        let dialogRef;
        if (activate) {
            dialogRef = this.dialog.open(ModalComponent, dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
                // console.log('dialogRef.afterClosed().subscribe');
            });
        }
        else {
            dialogRef = this.dialog.closeAll();
        }
    }
};
DataLoaderService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataLoaderService);
export { DataLoaderService };
//# sourceMappingURL=data-loader.service.js.map
