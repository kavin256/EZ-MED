import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {RequestOptions} from '../models/request-options';
import {DataKey, DataStoreService} from './data-store.service';
import {BehaviorSubject} from 'rxjs';
import {Constants, MODAL_TYPES} from '../utils/Constants';
import {MatDialogConfig} from '@angular/material';
import {ModalComponent} from '../components/modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class DataLoaderService {

    constructor(
        public dialog: MatDialog,
        private http: HttpClient,
        private dataStore: DataStoreService
    ) {}

    // make a GET request
    public get<T>(url: string, param: HttpParams, headers: HttpHeaders, dataKey: DataKey) {
        const options: RequestOptions = this.makeOptions(param, headers);
        this.dataStore.set(DataKey.error, {});

        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }

        return new Promise(resolve => {
            this.http.get<T>(url, {
                headers: options.headers,
                params: options.params
            }).subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                ( data) => {
                    resolve(data);
                    // @ts-ignore
                    // this.dataStore.set(dataKey, data.data, true);
                });
        });
    }

    // make a POST request
    public post<T>(url: string, param: HttpParams, headers: HttpHeaders, dataKey: DataKey, data: any) {
        const options: RequestOptions = this.makeOptions(param, headers);
        this.dataStore.set(DataKey.error, {});

        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }

        return new Promise(resolve => {
            this.http.post<T>(url, data, {
                headers: options.headers,
                params: options.params
            }).subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                ( data) => {
                    resolve(data);
                    // @ts-ignore
                    this.dataStore.set(dataKey, data.data, true);
                });
        });
    }

    // make a PUT request
    public put<T>(url: string, param: HttpParams, headers: HttpHeaders, dataKey: DataKey, data: any) {
        const options: RequestOptions = this.makeOptions(param, headers);
        this.dataStore.set(DataKey.error, {});

        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }
        return new Promise(resolve => {
            this.http.put<T>(url, data, {
                headers: options.headers,
                params: options.params
            }).subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                ( data) => {
                    resolve(data);
                    // @ts-ignore
                    this.dataStore.set(dataKey, data.data, true);
                });
        });
        // this.http.put<T>(url, data, {
        //     headers: options.headers,
        //     params: options.params
        // }).subscribe(
        //     result => {
        //         this.dataStore.set(dataKey, result, true);
        //     },
        //     error => {
        //         this.dataStore.set(DataKey.error, error, true);
        //     }
        // );
    }

    // make a DELETE request
    public delete<T>(url: string, param: HttpParams, headers: HttpHeaders, dataKey: DataKey) {
        const options: RequestOptions = this.makeOptions(param, headers);
        this.dataStore.set(DataKey.error, {});

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
    private makeOptions(param: HttpParams, headers: HttpHeaders): RequestOptions {
        const options: RequestOptions = new RequestOptions();
        options.params = param;
        options.headers = headers;
        options.headers = options.headers.append('Content-Type', 'application/json');

        // get auth key for authorization
        if (localStorage.getItem(Constants.EZMED_AUTH) != null) {
            let authKey = 'Bearer ';
            authKey = authKey + localStorage.getItem(Constants.EZMED_AUTH);
            options.headers = options.headers.append('Authorization', authKey);
        }
        return options;
    }

    // user login and get JWT token
    public login<T>(url: string, options: RequestOptions, data: any, dataKey: DataKey) {
        this.dataStore.set(DataKey.error, {});

        if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new BehaviorSubject(null));
        }

        this.http.post<T>(url, data, {
            headers: options.headers,
            params: options.params
        }).subscribe(
            result => {
                this.dataStore.set(DataKey.loggedUser, data, true);
                // @ts-ignore
                localStorage.setItem(Constants.EZMED_AUTH, result.jwt);
            },
            error => {
                this.dataStore.set(DataKey.error, error, true);
            });
    }

    // logout from the app
    public logOut() {
        localStorage.removeItem(Constants.EZMED_AUTH);
    }

    public activateLoader(activate: boolean, MODAL_TYPE: MODAL_TYPES, disableClose?: boolean) {
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
        } else {
            dialogRef = this.dialog.closeAll();
        }
    }
}
