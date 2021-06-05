import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Prescription} from '../../models/prescription';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Constants} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
    selector: 'app-verification',
    templateUrl: './verification.component.html',
    styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

    email: string;
    token: string;
    PageStatus = PageStatus;
    status: PageStatus;
    loading: boolean;
    error: { code: number, message: string };
    contactPhone: string;
    contactEmail: string;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public dataHandlerService: DataHandlerService,
        public dataLoaderService: DataLoaderService
    ) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.email = params.email;
            this.token = params.token;
        });
        if (this.token) {
            this.status = PageStatus.loading;
            this.getStatus();
        } else if (this.email) {
            this.status = PageStatus.goToVerificationLink;
        }
        this.contactEmail = this.dataHandlerService.loadConfig('EZMED_CONTACT_EMAIL');
        this.contactPhone = this.dataHandlerService.loadConfig('EZMED_CONTACT_PHONE');
    }

    logIn(): void {
        this.router.navigate(['signup']).then(r => {
        });
    }

    getStatus() {
        // create url and send request
        const url = Constants.API_BASE_URL + Constants.VERIFY_EMAIL_ACCOUNT;
        this.dataLoaderService.post<Prescription>(url, new HttpParams(), new HttpHeaders(), null, {token: this.token})
            .then((data: any) => {
                if (data && data.status && data.status.code === 1) {
                    this.status = PageStatus.canLogIn;
                } else if (data && data.status && data.status.code === -1) {
                    this.status = PageStatus.error;
                    this.error = data.data[0];
                }
            });
    }
}

export enum PageStatus {
    loading,
    error,
    canLogIn,
    goToVerificationLink
}
