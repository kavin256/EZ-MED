import { Component, OnInit } from '@angular/core';
import {DataKey, DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
import {DoctorScheduleData, FixedDoctorDate, UserData, WorkingTimePeriod} from '../../models/user-data';
import {DataHandlerService} from '../../services/data-handler.service';
import {Router} from '@angular/router';
import {Constants, MODAL_TYPES} from '../../utils/Constants';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataLoaderService} from '../../services/data-loader.service';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {
  professional: UserData;
  availableForAppointment = true;

  constructor(
      private router: Router,
      private dataStore: DataStoreService,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) {}

  DAY_TITLES = new Map(
      [
        [1, 'Sunday'],
        [2, 'Monday'],
        [3, 'Tuesday'],
        [4, 'Wednesday'],
        [5, 'Thursday'],
        [6, 'Friday'],
        [7, 'Saturday'],
      ]
  );
  meridian = true;
  changeRequestSent = false;
  isConfirmationActive = false;
  doctorScheduleData: DoctorScheduleData;

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);

    this.professional = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));
    if (this.professional && this.professional.userId) { this.populateDoctorScheduleData(this.professional.userId); }
  }

  save(userId: string) {
    if (this.updateSchedule()) {
      const url = Constants.API_BASE_URL + Constants.UPDATE_PROFESSIONAL_WORK_DATA + userId;
      this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING, true);
      if (this.availableForAppointment) {
        this.dataLoaderService.put<UserData>(url, new HttpParams(), new HttpHeaders(),
            DataKey.doctorScheduleData, this.doctorScheduleData)
            .then((data: any) => {
              if (data && data.status && data.status.code === 1) {
                this.isConfirmationActive = false;
                this.changeRequestSent = true;
                this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
                this.router.navigate(['doctor/dashboard']).then(r => {});
              } else if (data && data.status && data.status.code === -1) {
                this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
                this.dataLoaderService.activateLoader(true, MODAL_TYPES.ERROR + '2', false);
              }
            });
      } else {
        this.dataLoaderService.post<UserData>(url, new HttpParams(), new HttpHeaders(),
            DataKey.doctorScheduleData, this.doctorScheduleData)
            .then((data: any) => {
              if (data && data.status && data.status.code === 1) {
                this.dataHandlerService.loadUserData(userId, this.dataLoaderService, this.router);
                this.isConfirmationActive = false;
                this.changeRequestSent = true;
                this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
              } else if (data && data.status && data.status.code === -1) {
                this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
                this.dataLoaderService.activateLoader(true, MODAL_TYPES.ERROR + '2', false);
              }
            })
            .finally(() => {
                // this.router.navigate(['doctor/dashboard']).then(r => {location.reload(); });
                // this.router.navigate(['doctor/dashboard']).then(r => {location.reload(); });
                this.router.navigate(['doctor/dashboard'], {
                  queryParams: { logInRequired: true } }).then(r => {location.reload(); });
            });
      }
    } else {
      this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
      this.dataLoaderService.activateLoader(true, MODAL_TYPES.ERROR + '1', false);
    }
  }

  cancel() {
    this.isConfirmationActive = false;
    this.changeRequestSent = false;
  }

  private populateDoctorScheduleData(userId: string) {
    this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING, true);
    const url = Constants.API_BASE_URL + Constants.UPDATE_PROFESSIONAL_WORK_DATA + userId;
    this.dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            this.doctorScheduleData = data.data[0];
            this.availableForAppointment = JSON.parse(this.professional.availableForAppointment);
            this.doctorScheduleData.fixedDoctorDates = this.addDummyData(
                JSON.parse(JSON.stringify(this.doctorScheduleData.fixedDoctorDates))
            );
            this.prepareDisplayData(this.doctorScheduleData);
            sessionStorage.setItem(LocalStorageKeys.professionalScheduleData, JSON.stringify(this.doctorScheduleData));
            this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
          } else if (data && data.status && data.status.code === -1) {
            sessionStorage.setItem(LocalStorageKeys.professionalScheduleData, null);
            this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
          }
        }).finally(() => {
          this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
        });
  }

  private updateSchedule() {
    let success = true;
    this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING);

    // from hours and minutes to date
    if (this.doctorScheduleData) {
      this.doctorScheduleData.fixedDoctorDates.forEach((doctorDate) => {
        if (doctorDate.workingTimePeriods) {

          // filter out inactive slots
          const filtered = doctorDate.workingTimePeriods.filter((workingTimePeriod, index, arr) => {
            return workingTimePeriod.isActive;
          });

          filtered.forEach((workingTimePeriod) => {
            workingTimePeriod.endTime = this.dataHandlerService.convertHoursAndMinutesToTime(
                workingTimePeriod.endTimeSelected);
            workingTimePeriod.startTime = this.dataHandlerService.convertHoursAndMinutesToTime(
                workingTimePeriod.startTimeSelected);
          });
          doctorDate.workingTimePeriods = filtered;
          this.sortTheSchedule(doctorDate.workingTimePeriods);
          if (!this.validateSchedule(doctorDate.workingTimePeriods)) {
            success = false;
          }
        }
      });
    }
    return success;
  }

  userConsent() {

    if (this.doctorScheduleData.averageTimeForAppointment &&
        this.doctorScheduleData.averageTimeForAppointment > 0) {
      this.isConfirmationActive = !this.isConfirmationActive;
    } else {
      this.dataLoaderService.activateLoader(true, MODAL_TYPES.ERROR + '3', false);
    }
  }

  goToProfessionalDashboard() {
    this.router.navigate(['doctor/dashboard']).then(r => {
    });
  }

  private prepareDisplayData(doctorScheduleData: DoctorScheduleData) {
    doctorScheduleData.fixedDoctorDates.forEach((doctorDate) => {
      doctorDate.title = this.DAY_TITLES.get(doctorDate.day);
      if (doctorDate.workingTimePeriods) {
        doctorDate.workingTimePeriods.forEach((workingTimePeriod) => {
          workingTimePeriod.endTimeSelected = this.dataHandlerService.convertTimeToHoursAndMinutes(
              workingTimePeriod.endTime);
          workingTimePeriod.startTimeSelected = this.dataHandlerService.convertTimeToHoursAndMinutes(
              workingTimePeriod.startTime);
        });
      }
    });
  }

  private addDummyData(fixedDoctorDate: FixedDoctorDate []) {
    return this.dataHandlerService.createNewDummyAppointmentSlotArrayForWeek(fixedDoctorDate);
  }

  private sortTheSchedule(workingTimePeriods: WorkingTimePeriod[]) {
    workingTimePeriods.sort((a, b) => {
      if (a.startTime < b.startTime) {
        return -1;
      }
      if (a.startTime > b.startTime) {
        return 1;
      }
      return 0;
    });
  }

  private validateSchedule(workingTimePeriods: WorkingTimePeriod[]) {
    let success = true;

    // check for start time being higher than the end time
    workingTimePeriods.forEach((tp, index) => {
      if (tp.endTime && tp.endTime && tp.endTime <= tp.startTime) {
        success = false;
      }
    });

    // check for timeslot overlaps
    workingTimePeriods.forEach((tp, index) => {
      if (tp.endTime && workingTimePeriods[index + 1] && workingTimePeriods[index + 1].startTime &&
          tp.endTime > workingTimePeriods[index + 1].startTime) {
        success = false;
      }
    });
    return success;
  }
}
