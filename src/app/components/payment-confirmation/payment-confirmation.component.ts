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
    this.selectedProfessionalUserId = localStorage.getItem(LocalStorageKeys.selectedProfessionalUserId);
    this.loadProfessionalData(this.selectedProfessionalUserId);
    this.loggedInUser = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
    this.selectedAppointmentId = localStorage.getItem(LocalStorageKeys.selectedAppointmentId);

    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
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
    // document.cookie = 'amount=' + parseInt(this.doctor.priceForAppointment, 10) * 100;
    localStorage.setItem(LocalStorageKeys.chargeAmount, String(this.doctor.priceForAppointment) + '00');
    localStorage.setItem(LocalStorageKeys.clientRef, this.generateRefKey(this.selectedAppointmentId, this.loggedInUser.userId));
    // document.cookie = 'clientRef=' + this.generateRefKey(this.selectedAppointmentId, this.loggedInUser.userId);
    if (
        localStorage.getItem(LocalStorageKeys.chargeAmount)
        && localStorage.getItem(LocalStorageKeys.chargeAmount)
        && isNumber(parseInt(localStorage.getItem(LocalStorageKeys.chargeAmount), 10))
        && parseInt(localStorage.getItem(LocalStorageKeys.chargeAmount), 10) > 0
    ) {
      window.location.href = Constants.FE_BASE_URL + '/static-pages/payment.html';
    } else {
      window.alert('Something wrong with the payment amount!');
    }
  }

  private generateRefKey(bookingId: string, patientId: string) {
    return bookingId + '~~' + patientId;
  }
}
