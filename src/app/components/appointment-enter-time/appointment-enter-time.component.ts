import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Constants, TRANSITION_PAGE_TYPE} from '../../utils/Constants';
import {DataStoreService, SessionStorageKeys} from '../../services/data-store.service';
import {DatePipe} from '@angular/common';
import {DataLoaderService} from '../../services/data-loader.service';
import {UserData} from '../../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-appointment-enter-time',
  templateUrl: './appointment-enter-time.component.html',
  styleUrls: ['./appointment-enter-time.component.css']
})
export class AppointmentEnterTimeComponent implements OnInit {

  transitionType = null;
  selectedProfessionalUserId = null;
  doctor: UserData;
  availableAppointmentsForProfessional = [];

  isScheduleVisible = false;

  days = [
    {
      date: this.getDate(0).date,
      day: this.getDate(0).day,
      available: false
    },
    {
      date: this.getDate(1).date,
      day: this.getDate(1).day,
      available: false
    },
    {
      date: this.getDate(2).date,
      day: this.getDate(2).day,
      available: false
    },
    {
      date: this.getDate(3).date,
      day: this.getDate(3).day,
      available: false
    },
    {
      date: this.getDate(4).date,
      day: this.getDate(4).day,
      available: false
    },
    {
      date: this.getDate(5).date,
      day: this.getDate(5).day,
      available: false
    },
    {
      date: this.getDate(6).date,
      day: this.getDate(6).day,
      available: false
    },
  ];

  selectedDate: any;
  selectedAppointmentId = '';
  summaryShown = false;
  loggedInUser = null;
  showRedirectionMessage = false;

  constructor(
      public router: Router,
      public datePipe: DatePipe,
      public dataStore: DataStoreService,
      public dataHandlerService: DataHandlerService,
      public dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {
    this.selectedProfessionalUserId = sessionStorage.getItem(SessionStorageKeys.selectedProfessionalUserId);
    this.loadProfessionalData(this.selectedProfessionalUserId);
    this.loadAvailableAppointments(this.selectedProfessionalUserId);
    this.loggedInUser = sessionStorage.getItem(SessionStorageKeys.loggedInUser);
  }

  getDate(apart: number) {
    const today = new Date();
    today.setDate(today.getDate() + apart);
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const date = mm + '/' + dd + '/' + yyyy;

    const dayNum = today.getDay();
    let day: string;
    switch (dayNum) {
      case 0:
        day = 'Sunday';
        break;
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
    }
    return {
      date,
      day
    };
  }

  scheduleVisibilityToggle($event: boolean) {
    this.isScheduleVisible = $event;
  }

  navigateToPaymentOrLogIn() {
    // set the appointmentId in localStorage
    sessionStorage.setItem(SessionStorageKeys.selectedAppointmentId, this.selectedAppointmentId);
    if (!this.loggedInUser) {
      this.transitionType = TRANSITION_PAGE_TYPE.LOGIN_REDIRECT;
      this.showRedirectionMessage = true;
    } else {
      this.router.navigate(['confirmation']).then(r => {
      });
    }
  }

  getTimeSlots(selectedDate: any) {
    const selectedFullDate = new Date(selectedDate);

    let dummyAppointments = [];
    const found = this.availableAppointmentsForProfessional.find((appointmentTime: any) => {
      const appointmentDate = new Date(appointmentTime.date);
      return appointmentDate.getFullYear() === selectedFullDate.getFullYear() &&
          appointmentDate.getMonth() === selectedFullDate.getMonth() &&
          appointmentDate.getDate() === selectedFullDate.getDate();
    });
    if (found && found.dummyAppointments) {
      dummyAppointments = found.dummyAppointments;
      dummyAppointments.forEach((app) => {
        if (app && app.appointmentTime) {
          const dummyDate = new Date();
          const h = JSON.parse(JSON.stringify(parseInt(app.appointmentTime.toString().split(':')[0], 10)));
          const m = JSON.parse(JSON.stringify(parseInt(app.appointmentTime.toString().split(':')[1], 10)));
          dummyDate.setHours(h);
          dummyDate.setMinutes(m);
          app.displayAppointmentTime = dummyDate;
        }
      });
    }
    return dummyAppointments;
  }

  continueClicked($event: boolean) {
    this.summaryShown = $event;
  }

  private loadAvailableAppointments(id: string) {
    // create url and send request
    const url = Constants.API_BASE_URL + Constants.AVAILABLE_APPOINTMENTS_FOR_A_PROFESSIONAL + id;
    this.dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            this.availableAppointmentsForProfessional = data.data[0];
            this.filterOutUnavailableDays(this.days);
          } else if (data && data.status && data.status.code === -1) {
            this.availableAppointmentsForProfessional = [];
          } else {
            alert('something wrong when loading the appointment times');
          }
        });
  }

  private filterOutUnavailableDays(days: any[]) {
    days.forEach((day: any) => {
      if (this.getTimeSlots(day.date) && this.getTimeSlots(day.date).length > 0) {
        day.available = true;
      } else {
        day.available = false;
      }
    });
  }

  getDisplaySelectedTime(appointmentId: any) {
    let displaySelectedTime = '';
    if (appointmentId) {
      this.availableAppointmentsForProfessional.forEach((appointmentArray) => {
        if (appointmentArray.dummyAppointments) {
          appointmentArray.dummyAppointments.forEach((appointment) => {
            if (appointment && appointment.appointmentId && appointment.appointmentId === parseInt(appointmentId, 10)) {
              displaySelectedTime = this.datePipe.transform(appointment.displayAppointmentTime, 'shortTime');
            }
          });
        }
      });
    }
    return displaySelectedTime;
  }

  goToSearchProfessionals() {
    this.router.navigate(['searchProfessionals']).then(r => {
    });
  }

  logIn() {
    this.router.navigate(['signup']).then(r => {
    });
  }

  clickFromTransitionPage($event: string) {
    switch ($event) {
      case 'back':
        this.showRedirectionMessage = false;
        break;
      case 'logIn':
        this.logIn();
        this.showRedirectionMessage = false;
        break;
    }
  }

  private loadProfessionalData(selectedProfessionalUserId: any) {
    this.dataHandlerService.loadUserDataUsingUserId(selectedProfessionalUserId, this.dataLoaderService)
        .then((data: any) => {
          this.doctor = data;
        });
  }
}
