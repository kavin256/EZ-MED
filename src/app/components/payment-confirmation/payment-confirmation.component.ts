import { Component, OnInit } from '@angular/core';
import {Constants} from '../../utils/Constants';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {LocalStorageKeys} from '../../services/data-store.service';
import {UserData} from '../../models/user-data';

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
    document.cookie = 'amount=' + parseInt(this.doctor.priceForAppointment, 10) * 100;
    document.cookie = 'clientRef=' + this.generateRefKey(this.selectedAppointmentId, this.loggedInUser.userId);
    window.location.href = Constants.FE_BASE_URL + '/static-pages/payment.html';
  }

  private generateRefKey(bookingId: string, patientId: string) {
    return bookingId + '~~' + patientId;
  }
}
