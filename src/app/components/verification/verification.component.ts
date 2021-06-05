import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Prescription} from '../../models/prescription';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Constants} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';

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

    constructor(
        public route: ActivatedRoute,
        public router: Router,
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
                console.log('successful');
                this.status = PageStatus.canLogIn;
            } else if (data && data.status && data.status.code === -1) {
                console.log('unsuccessful');
                this.status = PageStatus.error;
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
