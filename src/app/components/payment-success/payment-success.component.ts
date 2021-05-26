import { Component, OnInit } from '@angular/core';
import {SessionStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Constants, MODAL_TYPES} from '../../utils/Constants';
import {UserData} from '../../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataLoaderService} from '../../services/data-loader.service';
import {HttpClient} from '@angular/common/http'
import {Time} from '@angular/common';
import * as moment from 'moment';

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
      public httpClient: HttpClient,
      public route: ActivatedRoute,
      public router: Router,
      public dataLoaderService: DataLoaderService,
      public dataHandlerService: DataHandlerService
  ) {
    this.route.queryParams.subscribe(params => {
      this.clientRef = params.clientRef;
      this.reqid = params.reqid;
    });
  }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser)), this.router);
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
              this.updateConcern(this.paymentResponseData, sessionStorage.getItem(SessionStorageKeys.appointmentConcern));
              sessionStorage.removeItem(SessionStorageKeys.appointmentConcern);
              sessionStorage.removeItem(SessionStorageKeys.selectedProfessionalUserId);
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

  getTime(appointmentTime: Time) {
    return moment(appointmentTime, ['HH.mm.ss']).format('hh:mm a');
  }

  private updateConcern(paymentResponseData, concern) {
    const url = Constants.API_BASE_URL + Constants.USER_APPOINTMENT_CONCERN + paymentResponseData.appointment.appointmentId;
    this.dataLoaderService.put(url, new HttpParams(), new HttpHeaders(), null, {concern})
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            // this.booking = data.data[0];
          } else if (data && data.status && data.status.code === -1) {
            // this.booking.status = this.previousStatus;
            // alert('Cannot update the appointment status right now. Please check your internet connection!');
          }
        }).catch(() => {
      // this.booking.status = this.previousStatus;
      // alert('Cannot update the appointment status right now. Please check your internet connection!');
    }).finally(() => {
      // this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
    });
  }
}
