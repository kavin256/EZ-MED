import { Component, OnInit } from '@angular/core';
import {Constants} from '../../utils/Constants';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {SessionStorageKeys} from '../../services/data-store.service';
import {UserData} from '../../models/user-data';
import {isNumber} from 'util';

@Component({
  selector: 'app-appointment-enter',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {

  // charges
  taxesAndFees = 0;
  serviceCharge = 0;
  serviceChargeRate = 0.1;
  preTaxTotalCharge = 0;
  totalCharge = 0;

  doctor: UserData;
  appointmentConcern: string;
  isScheduleVisible = false;
  selectedAppointmentId = '';
  loggedInUser: UserData;
  selectedProfessionalUserId: string;

  constructor(
      public router: Router,
      public dataLoaderService: DataLoaderService,
      public dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    this.selectedProfessionalUserId = sessionStorage.getItem(SessionStorageKeys.selectedProfessionalUserId);
    this.loadProfessionalData(this.selectedProfessionalUserId);
    this.loggedInUser = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));
    this.selectedAppointmentId = sessionStorage.getItem(SessionStorageKeys.selectedAppointmentId);

    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser)), this.router);
  }

  private loadProfessionalData(selectedProfessionalUserId: any) {
    this.dataHandlerService.loadUserDataUsingUserId(selectedProfessionalUserId, this.dataLoaderService)
        .then((data: any) => {
          this.doctor = data;

          // calculate charging amounts
          this.serviceCharge = parseInt(this.doctor.priceForAppointment, 10) * this.serviceChargeRate;
          this.preTaxTotalCharge = parseInt(this.doctor.priceForAppointment, 10) + this.serviceCharge;
          this.totalCharge = parseInt(this.doctor.priceForAppointment, 10) + this.serviceCharge + this.taxesAndFees;
        });
  }

  scheduleVisibilityToggle($event: boolean) {
      this.isScheduleVisible = $event;
  }

  goBack() {
    this.router.navigate(['appointmentTime']).then(r => {});
  }

  payment() {
    // set appointment concern
    sessionStorage.setItem(SessionStorageKeys.appointmentConcern, this.appointmentConcern);

    // todo: get the charge values from backend !!!!
    sessionStorage.setItem(SessionStorageKeys.chargeAmount, (this.totalCharge * 100).toString());
    sessionStorage.setItem(SessionStorageKeys.clientRef, this.generateRefKey(this.selectedAppointmentId, this.loggedInUser.userId));
    sessionStorage.setItem(SessionStorageKeys.comment, 'This is a demo payment');
    if (
        sessionStorage.getItem(SessionStorageKeys.clientRef)
        && sessionStorage.getItem(SessionStorageKeys.chargeAmount)
        && isNumber(parseInt(sessionStorage.getItem(SessionStorageKeys.chargeAmount), 10))
        && parseInt(sessionStorage.getItem(SessionStorageKeys.chargeAmount), 10) > 0
    ) {
      window.location.href = Constants.FE_BASE_URL + '/static-pages/payment.html';
    } else {
      sessionStorage.removeItem('chargeAmount');
      sessionStorage.removeItem('clientRef');
      sessionStorage.removeItem('comment');
      window.alert('Something wrong with the payment amount!');
    }
  }

  private generateRefKey(appointmentId: string, patientId: string) {
    return appointmentId + '--' + patientId;
  }
}
