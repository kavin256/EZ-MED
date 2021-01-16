import { Component, OnInit } from '@angular/core';
import {DataKey, DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
import {DoctorScheduleData, DoctorSpecificData, FixedDoctorDate, UserData} from '../../models/user-data';
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
  professional: DoctorSpecificData;
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
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));

    this.professional = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
    if (this.professional && this.professional.userName) { this.populateDoctorScheduleData(this.professional.userName); }
  }

  save(userName: string) {
    this.updateSchedule();
    const url = Constants.BASE_URL + Constants.UPDATE_PROFESSIONAL_WORK_DATA + userName;
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
              // Todo: show error
              alert('Something went wrong!');
            }
          });
    } else {
      this.dataLoaderService.post<UserData>(url, new HttpParams(), new HttpHeaders(),
          DataKey.doctorScheduleData, this.doctorScheduleData)
          .then((data: any) => {
            if (data && data.status && data.status.code === 1) {
              this.dataHandlerService.loadUserData(userName, this.dataLoaderService);
              this.isConfirmationActive = false;
              this.changeRequestSent = true;
            } else if (data && data.status && data.status.code === -1) {
            }
          });
    }
  }

  cancel() {
    this.isConfirmationActive = false;
    this.changeRequestSent = false;
  }

  private populateDoctorScheduleData(userName: string) {
    this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING, true);
    const url = Constants.BASE_URL + Constants.UPDATE_PROFESSIONAL_WORK_DATA + userName;
    this.dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            this.doctorScheduleData = data.data[0];
            this.availableForAppointment = JSON.parse(this.professional.availableForAppointment);
            this.doctorScheduleData.fixedDoctorDates = this.addDummyData(
                JSON.parse(JSON.stringify(this.doctorScheduleData.fixedDoctorDates))
            );
            this.prepareDisplayData(this.doctorScheduleData);
            localStorage.setItem(LocalStorageKeys.professionalScheduleData, JSON.stringify(this.doctorScheduleData));
            this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
          } else if (data && data.status && data.status.code === -1) {
            localStorage.setItem(LocalStorageKeys.professionalScheduleData, null);
            this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
          }
        });
  }

  private updateSchedule() {
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
        }
      });
    }
  }

  userConsent() {

    if (this.doctorScheduleData.averageTimeForAppointment &&
        this.doctorScheduleData.averageTimeForAppointment > 0) {
      this.isConfirmationActive = !this.isConfirmationActive;
    } else {
      // Todo: show a proper error
      alert('Please enter a valid average time');
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
}
