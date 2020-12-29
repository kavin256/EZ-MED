import { Component, OnInit } from '@angular/core';
import {DataKey, DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
import {DoctorScheduleData, DoctorSpecificData, FixedDoctorDate, UserData} from '../../models/user-data';
import {DataHandlerService} from '../../services/data-handler.service';
import {Router} from '@angular/router';
import {Constants} from '../../utils/Constants';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataLoaderService} from '../../services/data-loader.service';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {
  professional: DoctorSpecificData;
  isScheduleEmpty = true;

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
    if (this.professional.availableForAppointment) {
      this.dataLoaderService.put<UserData>(url, new HttpParams(), new HttpHeaders(),
          DataKey.doctorScheduleData, this.doctorScheduleData)
          .then((data: any) => {
            if (data && data.status && data.status.code === 1) {
              // console.log('data');
              // console.log(data.data);
              this.isConfirmationActive = false;
              this.changeRequestSent = true;
            } else if (data && data.status && data.status.code === -1) {
              // console.log('data null');
              // console.log(data.data);
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
    const url = Constants.BASE_URL + Constants.UPDATE_PROFESSIONAL_WORK_DATA + userName;
    this.dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            this.doctorScheduleData = data.data[0];
            this.isScheduleEmpty = this.isScheduleDataEmpty(this.doctorScheduleData.fixedDoctorDates);
            if (this.doctorScheduleData) {
              this.prepareDisplayData(this.doctorScheduleData);
            }
            localStorage.setItem(LocalStorageKeys.professionalScheduleData, JSON.stringify(this.doctorScheduleData));
          } else if (data && data.status && data.status.code === -1) {
            localStorage.setItem(LocalStorageKeys.professionalScheduleData, null);
          }
        });
  }

  private populateDoctorScheduleDataByMock() {
    this.doctorScheduleData = {
      averageTimeForAppointment: 30,
      fixedDoctorDates: [
        {
          day: 1,
          workingTimePeriods: [
            {
              startTime: '08:00:00',
              endTime: '10:00:00',
              isActive: true
            },
            {
              startTime: '14:00:00',
              endTime: '16:00:00',
              isActive: false
            },
            {
              startTime: '17:00:00',
              endTime: '18:00:00',
              isActive: true
            }
          ]
        },
        {
          day: 2,
          workingTimePeriods: [
            {
              startTime: '10:00:00',
              endTime: '11:45:00',
              isActive: true
            }
          ]
        },
        {
          day: 3,
          workingTimePeriods: null
        },
        {
          day: 4,
          workingTimePeriods: null
        },
        {
          day: 5,
          workingTimePeriods: null
        },
        {
          day: 6,
          workingTimePeriods: null
        },
        {
          day: 7,
          workingTimePeriods: [
            {
              startTime: '10:00:00',
              endTime: '12:10:00',
              isActive: true
            },
            {
              startTime: '13:00:00',
              endTime: '15:10:00',
              isActive: false
            }
          ]
        }
      ]
    };
    this.prepareDisplayData(this.doctorScheduleData);
  }

  private updateSchedule() {
    // from hours and minutes to date
    if (this.doctorScheduleData) {
      this.doctorScheduleData.fixedDoctorDates.forEach((doctorDate) => {
        if (doctorDate.workingTimePeriods) {
          doctorDate.workingTimePeriods.forEach((workingTimePeriod) => {
            workingTimePeriod.endTime = this.dataHandlerService.convertHoursAndMinutesToTime(
                workingTimePeriod.endTimeSelected);
            workingTimePeriod.startTime = this.dataHandlerService.convertHoursAndMinutesToTime(
                workingTimePeriod.startTimeSelected);
          });
        }
      });
    }
  }

  userConsent() {
    this.isConfirmationActive = !this.isConfirmationActive;
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

  private isScheduleDataEmpty(fixedDoctorDates: FixedDoctorDate[]) {
    let isScheduleDataAvailable = false;
    fixedDoctorDates.forEach((fixedDoctorDate) => {
      isScheduleDataAvailable = isScheduleDataAvailable ||
          fixedDoctorDate && fixedDoctorDate.workingTimePeriods && fixedDoctorDate.workingTimePeriods.length > 0;
    });
    return !isScheduleDataAvailable;
  }
}
