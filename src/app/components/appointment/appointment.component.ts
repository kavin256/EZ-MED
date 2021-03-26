import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {DataLoaderService} from '../../services/data-loader.service';
import {DoctorType} from '../../utils/Constants';
import {UserData} from '../../models/user-data';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingStatus} from '../appointment-list/appointment-list.component';
import {AppointmentData} from '../../models/appointment-data';
import {SubscriptionLog} from 'rxjs/internal/testing/SubscriptionLog';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit, OnDestroy {

    inProgress = false;
    isConfirmationActive = false;
    changeRequestSent = false;
    doctorSide = false;
    bookingId: number;
    booking: AppointmentData;
    patient: UserData;
    doctor: UserData;
    loggedInUser: UserData = null;
    isPatientDetailsShown = true;
    selectedProfessionalUserId: string;
    sub = new Subscription();

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private dataHandlerService: DataHandlerService,
      private dataLoaderService: DataLoaderService
    ) { }

    ngOnInit() {
      this.sub = this.route
          .queryParams
          .subscribe(params => {
              // Defaults to 0 if no query param provided.
              this.bookingId = +params.id || 0;
              // load Appointment by ID
              this.dataHandlerService.loadUserAppointmentById(this.bookingId, this.dataLoaderService)
                  .then((data: AppointmentData) => {
                      this.booking = data;
                      this.patient = this.booking.patientData;
                      this.doctor = this.booking.doctorData;
                  }).catch((e) => {
                      console.log(e);
                  }).finally(() => {});
          });
      // if not logged In this page should not be able to access
      if (localStorage.getItem(LocalStorageKeys.loggedInUser)) {
          this.loggedInUser = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
          this.doctorSide = this.loggedInUser.doctor;
      }
      this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);
      this.selectedProfessionalUserId = localStorage.getItem(LocalStorageKeys.selectedProfessionalUserId);

      // this.loadProfessionalData(this.selectedProfessionalUserId);
    }

    userConsent() {
      this.isConfirmationActive = !this.isConfirmationActive;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private loadProfessionalData(selectedProfessionalUserId: any) {
      this.dataHandlerService.loadUserDataUsingUserId(selectedProfessionalUserId, this.dataLoaderService)
          .then((data: any) => {
              this.doctor = data;
          });
    }

    cancel() {
      // this.updateSchedule();
      this.isConfirmationActive = false;
      this.changeRequestSent = true;
      this.booking.status = BookingStatus.BOOKING_CANCELLED;
    }

    dismiss() {
      this.isConfirmationActive = false;
      this.changeRequestSent = false;
    }

    goBack() {
        this.router.navigate(['appointments']).then(r => {
        });
    }
}
