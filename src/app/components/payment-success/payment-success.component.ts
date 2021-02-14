import { Component, OnInit } from '@angular/core';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Constants, MODAL_TYPES} from '../../utils/Constants';
import {UserData} from '../../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataLoaderService} from '../../services/data-loader.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  reqid: string;
  clientRef: string;
  isPaymentSuccessful = false;
  paymentResponseData: any;

  constructor(
      private httpClient: HttpClient,
      private route: ActivatedRoute,
      private router: Router,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) {
    this.route.queryParams.subscribe(params => {
      this.clientRef = params.clientRef;
      this.reqid = params.reqid;
    });
  }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    this.processPaymentRequest();
  }

  private processPaymentRequest() {
    this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING, true);
    const url = Constants.API_BASE_URL + Constants.APPOINTMENT_PAYMENT;
    let params = new HttpParams();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    params = params.append('clientRef', urlParams.get('clientRef'));
    params = params.append('reqid', urlParams.get('reqid'));
    this.dataLoaderService.get<UserData>(url, params, new HttpHeaders())
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            this.paymentResponseData = data.data[0];
            if (
                this.paymentResponseData.responseCode === '00' ||
                this.paymentResponseData.responseCode === '11' ||
                this.paymentResponseData.responseCode === '08'
            ) {
              this.isPaymentSuccessful = true;
              localStorage.removeItem(LocalStorageKeys.selectedProfessionalUsername);
            } else {
              this.isPaymentSuccessful = false;
            }
          }
        }).catch((e) => {
      console.log(e.message);
    }).finally(() => {
      this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
    });
  }

  goToDashboard() {
    this.router.navigate(['user/dashboard']).then(r => {
    });
  }

  goToBooking() {
    this.router.navigate(['appointments']).then(r => {
    });
  }
}
