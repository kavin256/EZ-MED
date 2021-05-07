import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {RequestOptions} from '../models/request-options';
import {DataKey, DataStoreService} from './data-store.service';
import {BehaviorSubject} from 'rxjs-compat/BehaviorSubject';
import {Constants} from '../utils/Constants';
import {ModalComponent} from '../components/modal/modal.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class DataLoaderService {

    constructor(
        public dialog: MatDialog,
        public http: HttpClient,
        public dataStore: DataStoreService
    ) {}

    // make a GET request
    public get<T>(url: string, param: HttpParams, headers: HttpHeaders) {
        const options: RequestOptions = this.makeOptions(param, headers);
        return new Promise((resolve, reject) => {
            this.http.get<T>(url, {
                headers: options.headers,
                params: options.params
            }).subscribe(
                ( data) => {
                    resolve(data);
                }, (data) => {
                    reject(data);
                });
        });
    }

    // make a POST request
    public post<T>(url: string, param: HttpParams, headers: HttpHeaders, dataKey: DataKey, data: any) {
        const options: RequestOptions = this.makeOptions(param, headers);
        if (dataKey && this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }

        return new Promise((resolve, reject) => {
            this.http.post<T>(url, data, {
                headers: options.headers,
                params: options.params
            }).subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                ( data) => {
                    if (dataKey) {
                        // @ts-ignore
                        this.dataStore.set(dataKey, data.data, true);
                    }
                    resolve(data);
                });
        });
    }

    // make a PUT request
    public put<T>(url: string, param: HttpParams, headers: HttpHeaders, dataKey: DataKey, data: any) {
        const options: RequestOptions = this.makeOptions(param, headers);
        if (dataKey && this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }
        return new Promise((resolve, reject) => {
            this.http.put<T>(url, data, {
                headers: options.headers,
                params: options.params
            }).subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                ( data) => {
                    resolve(data);
                    // @ts-ignore
                    if (dataKey) { this.dataStore.set(dataKey, data.data, true); }
                    // tslint:disable-next-line:no-shadowed-variable
                }, (data) => {
                    reject(data);
                });
        });
    }

    // make a DELETE request
    public delete<T>(url: string, param: HttpParams, headers: HttpHeaders, dataKey: DataKey) {
        const options: RequestOptions = this.makeOptions(param, headers);
        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }

        this.http.delete<T>(url, {
            headers: options.headers,
            params: options.params
        }).subscribe(
            result => {
                this.dataStore.set(dataKey, result, true);
            },
            error => {
                this.dataStore.set(DataKey.error, error, true);
            }
        );
    }

    // make request params and headers for request
    public makeOptions(param: HttpParams, headers: HttpHeaders): RequestOptions {
        const options: RequestOptions = new RequestOptions();
        options.params = param;
        options.headers = headers;
        options.headers = options.headers.append('Content-Type', 'application/json');

        // get auth key for authorization
        if (sessionStorage.getItem(Constants.EZ_MED_AUTH) != null) {
            let authKey = 'Bearer ';
            authKey = authKey + sessionStorage.getItem(Constants.EZ_MED_AUTH);
            options.headers = options.headers.append('Authorization', authKey);
        }
        return options;
    }

    // user login and get JWT token
    public login<T>(url: string, options: RequestOptions, data: any, dataKey: DataKey) {
        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }
        return new Promise((resolve, reject) => {
            this.http.post<T>(url, data, {
                headers: options.headers,
                params: options.params
            }).subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                (data) => {
                    // @ts-ignore
                    this.dataStore.set(dataKey, data.data, true);
                    resolve(data);
                    // tslint:disable-next-line:no-shadowed-variable
                }, (data) => {
                    reject(data);
                });
        });
    }

    // logout from the app
    public logOut() {
        sessionStorage.removeItem(Constants.EZ_MED_AUTH);
    }

    public activateLoader(activate: boolean, MODAL_TYPE: string, disableClose?: boolean, callBackFunction?,
                          size = {minHeight: 500, minWidth: 320, maxHeight: 600, maxWidth: 620}, dataA?) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.data = {
            modalType: MODAL_TYPE,
            dataA
        };
        if (MODAL_TYPE === 'PAST_RECORDS') {
            dialogConfig.disableClose = disableClose;
            dialogConfig.maxWidth = '320px';
            dialogConfig.maxHeight = '500px';
        } else {
            dialogConfig.disableClose = disableClose;
            dialogConfig.maxWidth = size.maxWidth.toString() + 'px';
            dialogConfig.minWidth = size.minWidth.toString() + 'px';
            dialogConfig.maxHeight = size.maxHeight.toString() + 'px';
            dialogConfig.minHeight = size.minHeight.toString() + 'px';
        }

        let dialogRef;
        if (activate) {
            dialogRef = this.dialog.open(ModalComponent, dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
                if (callBackFunction) {
                    callBackFunction(result);
                }
            });
        } else {
            dialogRef = this.dialog.closeAll();
        }
    }
}
