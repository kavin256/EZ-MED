import { Component, OnInit } from '@angular/core';
import {DataKey, DataStoreService} from '../../services/data-store.service';
import {DoctorScheduleData, UserData} from '../../models/user-data';
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
  profileUsername = 'dfg';
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
  DEFAULT_AVERAGE_TIME_FOR_APPOINTMENT = 20;
  meridian = true;
  changeRequestSent = false;
  isConfirmationActive = false;
  doctorScheduleData: DoctorScheduleData;

  ngOnInit() {
    // this.populateDoctorScheduleData();
    this.populateDoctorScheduleDataByMock();
  }

  save() {
    this.updateSchedule();
    const url = Constants.BASE_URL + Constants.UPDATE_PROFESSIONAL_WORK_DATA + this.profileUsername;
    if (this.availableForAppointment) {
      this.dataLoaderService.put<UserData>(url, new HttpParams(), new HttpHeaders(),
          DataKey.uploadImage, this.doctorScheduleData)
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
          DataKey.uploadImage, this.doctorScheduleData)
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
    }
  }

  cancel() {
    this.isConfirmationActive = false;
    this.changeRequestSent = false;
  }

  private populateDoctorScheduleData() {
    this.doctorScheduleData = this.dataStore.get(DataKey.doctorScheduleData).getValue() as DoctorScheduleData;
    if (this.doctorScheduleData) {
      this.doctorScheduleData.averageTimeForAppointment = this.doctorScheduleData.averageTimeForAppointment ?
          this.doctorScheduleData.averageTimeForAppointment : this.DEFAULT_AVERAGE_TIME_FOR_APPOINTMENT;
      this.doctorScheduleData.fixedDoctorDates.forEach((doctorDate) => {
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

    if (this.doctorScheduleData) {
      this.doctorScheduleData.averageTimeForAppointment = this.doctorScheduleData.averageTimeForAppointment ?
          this.doctorScheduleData.averageTimeForAppointment : this.DEFAULT_AVERAGE_TIME_FOR_APPOINTMENT;
      this.doctorScheduleData.fixedDoctorDates.forEach((doctorDate) => {
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
}
