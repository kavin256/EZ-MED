import { Component, OnInit } from '@angular/core';
import {Constants} from '../../utils/Constants';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {LocalStorageKeys} from '../../services/data-store.service';
import {UserData} from '../../models/user-data';
import {isNumber} from 'util';

@Component({
  selector: 'app-booking-enter',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {

  doctor: UserData;
  isScheduleVisible = false;
  selectedAppointmentId = '';
  loggedInUser: UserData;
  private selectedProfessionalUserId: string;

  constructor(
      private router: Router,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    this.selectedProfessionalUserId = sessionStorage.getItem(LocalStorageKeys.selectedProfessionalUserId);
    this.loadProfessionalData(this.selectedProfessionalUserId);
    this.loggedInUser = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));
    this.selectedAppointmentId = sessionStorage.getItem(LocalStorageKeys.selectedAppointmentId);

    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);
  }

  private loadProfessionalData(selectedProfessionalUserId: any) {
    this.dataHandlerService.loadUserDataUsingUserId(selectedProfessionalUserId, this.dataLoaderService)
        .then((data: any) => {
          this.doctor = data;
        });
  }

  scheduleVisibilityToggle($event: boolean) {
      this.isScheduleVisible = $event;
  }

  goBack() {
    this.router.navigate(['appointmentTime']).then(r => {});
  }

  payment() {
    // todo: validate the price in the backend too !!!!
    sessionStorage.setItem(LocalStorageKeys.chargeAmount, String(this.doctor.priceForAppointment) + '00');
    sessionStorage.setItem(LocalStorageKeys.clientRef, this.generateRefKey(this.selectedAppointmentId, this.loggedInUser.userId));
    if (
        sessionStorage.getItem(LocalStorageKeys.clientRef)
        && sessionStorage.getItem(LocalStorageKeys.chargeAmount)
        && isNumber(parseInt(sessionStorage.getItem(LocalStorageKeys.chargeAmount), 10))
        && parseInt(sessionStorage.getItem(LocalStorageKeys.chargeAmount), 10) > 0
    ) {
      window.location.href = Constants.FE_BASE_URL + '/static-pages/payment.html';
    } else {
      sessionStorage.removeItem('chargeAmount');
      sessionStorage.removeItem('clientRef');
      window.alert('Something wrong with the payment amount!');
    }
  }

  private generateRefKey(bookingId: string, patientId: string) {
    return bookingId + '~~' + patientId;
  }
}
