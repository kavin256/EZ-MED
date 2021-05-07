import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {DataLoaderService} from '../../services/data-loader.service';
import {APPOINTMENT_STATUS, Constants, MODAL_TYPES} from '../../utils/Constants';
import {UserData} from '../../models/user-data';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentData} from '../../models/appointment-data';
import {Subscription} from 'rxjs';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import * as moment from 'moment';
import {Prescription} from '../../models/prescription';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit, OnDestroy {

    appointmentTime: string;
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
    previousStatus: APPOINTMENT_STATUS;
    networkError: boolean;
    medicalHistory: any;

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
              this.bookingId = +params.id;
              // load Appointment by ID
              this.dataHandlerService.loadUserAppointmentById(this.bookingId, this.dataLoaderService)
                  .then((data: AppointmentData) => {
                      this.booking = data;

                      // repeated call to check status change
                      this.repeatedStatusChecker();

                      // let time = new Time
                      this.appointmentTime = moment(this.booking.appointmentTime, ['HH.mm.ss']).format('hh:mm a');
                      this.patient = this.booking.patientData;
                      this.doctor = this.booking.doctorData;

                      // load Medical History
                      this.loadMedicalHistory();
                  }).catch((e) => {
                      console.log(e);
                  }).finally(() => {});
          });
      // if not logged In this page should not be able to access
      if (sessionStorage.getItem(LocalStorageKeys.loggedInUser)) {
          this.loggedInUser = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));
          this.doctorSide = this.loggedInUser.doctor;
      }
      this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);
      this.selectedProfessionalUserId = sessionStorage.getItem(LocalStorageKeys.selectedProfessionalUserId);
    }

    repeatedStatusChecker() {
        setTimeout(() => {
            if (!this.networkError && !this.doctorSide
                && (this.booking.status === APPOINTMENT_STATUS.NOT_STARTED || this.booking.status === APPOINTMENT_STATUS.IN_PROGRESS)
            ) {
                this.liteStatusChecker();
                this.repeatedStatusChecker();
            }
        }, 60000);
    }

    liteStatusChecker() {
        this.networkError = false;
        this.dataHandlerService.loadUserAppointmentById(this.bookingId, this.dataLoaderService)
            .then((data: AppointmentData) => {
                console.log('status checked');
                if (data.status !== this.booking.status) {
                    this.booking = data;
                    // let time = new Time
                    this.appointmentTime = moment(this.booking.appointmentTime, ['HH.mm.ss']).format('hh:mm a');
                    this.patient = this.booking.patientData;
                    this.doctor = this.booking.doctorData;
                }
            }).catch((e) => {
                this.networkError = true;
                alert('Something is not right. Please check your internet connection!');
        }).finally(() => {
        });
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

    dismiss() {
      this.isConfirmationActive = false;
      this.changeRequestSent = false;
    }

    goBack() {
        this.router.navigate(['appointments']).then(r => {});
    }

    cancel() {
        this.isConfirmationActive = false;
        this.changeRequestSent = true;
        this.previousStatus = this.booking.status;
        if (this.doctorSide) {
          this.booking.status = APPOINTMENT_STATUS.CANCELLED_BY_DOCTOR;
        } else {
          this.booking.status = APPOINTMENT_STATUS.CANCELLED_BY_PATIENT;
        }
        this.updateAppointmentStatus();
    }

    start() {
        this.previousStatus = this.booking.status;
        this.booking.status = APPOINTMENT_STATUS.IN_PROGRESS;
        this.updateAppointmentStatus();
    }

    end() {
        this.previousStatus = this.booking.status;
        this.booking.status = APPOINTMENT_STATUS.COMPLETED;
        this.updateAppointmentStatus();
    }

    goToPrescription() {
        this.router.navigate(['appointment/prescriptionList'], { queryParams: { appointmentId: this.bookingId } }).then(r => {});
    }

    openPastRecords(): void {
        this.dataLoaderService.activateLoader(true, 'PAST_RECORDS',
            false,
            undefined,
            undefined,
            this.medicalHistory);
    }

    isNew(status: APPOINTMENT_STATUS) {
        return status === APPOINTMENT_STATUS.NOT_STARTED;
    }

    isInProgress(status: APPOINTMENT_STATUS) {
        return status === APPOINTMENT_STATUS.IN_PROGRESS;
    }

    getStatusName(status: APPOINTMENT_STATUS) {
        return this.dataHandlerService.convertCamelCaseToSentence(APPOINTMENT_STATUS[status]);
    }

    private updateAppointmentStatus() {
        this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING);
        const url = Constants.API_BASE_URL + Constants.USER_APPOINTMENT_SET_STATUS + this.booking.appointmentId + '/' + this.booking.status;
        this.dataLoaderService.put(url, new HttpParams(), new HttpHeaders(), null, null)
            .then((data: any) => {
                if (data && data.status && data.status.code === 1) {
                    this.booking = data.data[0];
                } else if (data && data.status && data.status.code === -1) {
                    this.booking.status = this.previousStatus;
                    alert('Cannot update the appointment status right now. Please check your internet connection!');
                }
            }).catch(() => {
                this.booking.status = this.previousStatus;
                alert('Cannot update the appointment status right now. Please check your internet connection!');
            }).finally(() => {
                this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
        });
    }

    private loadMedicalHistory() {
        this.dataHandlerService.loadMedicalHistory(this.bookingId, this.dataLoaderService)
            .then((data: Prescription []) => {
                if (data) {
                    this.medicalHistory = data;
                }
            }).catch((e) => {
        }).finally(() => {
        });
    }
}
