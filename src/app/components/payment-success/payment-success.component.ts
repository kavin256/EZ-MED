import { Component, OnInit } from '@angular/core';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Constants, MODAL_TYPES} from '../../utils/Constants';
import {UserData} from '../../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataLoaderService} from '../../services/data-loader.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  reqid: string;
  clientRef: string;

  constructor(
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
    // this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING, true);
    // const url = Constants.API_BASE_URL + Constants.APPOINTMENT_PAYMENT;
    // this.dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
    //     .then((data: any) => {
    //       if (data && data.status && data.status.code === 1) {
    //         this.doctorScheduleData = data.data[0];
    //         this.availableForAppointment = JSON.parse(this.professional.availableForAppointment);
    //         this.doctorScheduleData.fixedDoctorDates = this.addDummyData(
    //             JSON.parse(JSON.stringify(this.doctorScheduleData.fixedDoctorDates))
    //         );
    //         this.prepareDisplayData(this.doctorScheduleData);
    //         localStorage.setItem(LocalStorageKeys.professionalScheduleData, JSON.stringify(this.doctorScheduleData));
    //         this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
    //       } else if (data && data.status && data.status.code === -1) {
    //         localStorage.setItem(LocalStorageKeys.professionalScheduleData, null);
    //         this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
    //       }
    //     });
  }

  goToDashboard() {
    this.router.navigate(['user/dashboard']).then(r => {
    });
  }
}
