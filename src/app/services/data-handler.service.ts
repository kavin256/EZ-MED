import { Injectable } from '@angular/core';
import {Constants, DoctorType} from '../utils/Constants';
import {startCase, camelCase} from 'lodash';
import {Router} from '@angular/router';
import {FixedDoctorDate, UserData} from '../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {LocalStorageKeys} from './data-store.service';
import {DataLoaderService} from './data-loader.service';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(
      private router: Router
  ) { }

  convertTimeToHoursAndMinutes(time: string) {
    const timeObj = {
      hour: parseInt(time.split(':')[0], 10),
      minute: parseInt(time.split(':')[1], 10)
    };
    return timeObj;
  }

  convertHoursAndMinutesToTime(time: { hour: number; minute: number }) {
    const timeString = time.hour.toString().padStart(2, '0') + ':' + time.minute.toString().padStart(2, '0') + ':00';
    return timeString;
  }

  convertCamelCaseToSentence(str: string) {
    return startCase(camelCase(str));
  }

  convertToCamelCase(str: string) {
    return camelCase(str);
  }

  redirectToSignUpIfNotLoggedIn(loggedInUser: UserData) {
    if (loggedInUser && loggedInUser.userName) {
    } else {
      this.router.navigate(['signup']).then(r => {});
    }
  }

  createNewDummyAppointmentSlotArrayForWeek(fixedDoctorDates: FixedDoctorDate [])  {
    const dummyAppointmentSlotArray = [];
    for (let i = 1; i < 8; i++) {
      dummyAppointmentSlotArray.push(this.fillDummyAppointmentSlot(i, 3));
    }
    // if (dummyAppointmentSlotArray.length > 0 && dummyAppointmentSlotArray.length === fixedDoctorDates.length) {
      this.loadAvailableSlots(dummyAppointmentSlotArray, fixedDoctorDates);
    // }
    return dummyAppointmentSlotArray;
  }

  fillDummyAppointmentSlot(dayNo: number, numberOfTimeSlots: number) {
    const workingTimePeriods = [];
    for (let i = 0; i < numberOfTimeSlots; i ++) {
      workingTimePeriods.push(
          {
            startTime: '10:00:00',
            endTime: '11:00:00'
          }
      );
    }
    return {
      day: dayNo,
      workingTimePeriods
    };
  }

  redirectFromSignUpIfLoggedIn(loggedInUser: UserData) {
    if (loggedInUser && loggedInUser.doctor) {
      this.router.navigate(['doctor/dashboard']).then(r => {});
    } else if (loggedInUser && !loggedInUser.doctor) {
      this.router.navigate(['user/dashboard']).then(r => {});
    }
  }

  logOut() {
    localStorage.clear();
    location.reload();
    this.router.navigate(['signup']).then(r => {});
  }

  loadUserData(userName: string, dataLoaderService: DataLoaderService): any {
    let userData = null;
    const url = Constants.BASE_URL + Constants.GET_USER_DATA + userName;
    dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
      .then((data: any) => {
        if (data && data.status && data.status.code === 1) {
          userData = data.data[0];
          localStorage.setItem(LocalStorageKeys.loggedInUser, JSON.stringify(userData));
          const user = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
          if (user && user.doctor) {
            this.router.navigate(['doctor/dashboard']).then(r => {
              location.reload();
            });
          } else if (user && !user.doctor) {
            this.router.navigate(['user/dashboard']).then(r => {
              location.reload();
            });
          }
        } else if (data && data.status && data.status.code === -1) {
          localStorage.setItem(LocalStorageKeys.loggedInUser, null);
          return null;
        }
      });
  }

  loadUserDataSimple(userName: string, dataLoaderService: DataLoaderService): any {
    return new Promise(resolve => {
      const url = Constants.BASE_URL + Constants.GET_USER_DATA + userName;
      dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
          .then((data: any) => {
            resolve(data.data[0]);
          });
    });
  }

  convertProfessionalTypeToDBFormat(professionalType: string) {
    switch (professionalType) {
      case DoctorType.CON:
        professionalType = 'CON';
        break;
      case DoctorType.COUN:
        professionalType = 'COUN';
        break;
      case DoctorType.GEN:
        professionalType = 'GEN';
        break;
      case DoctorType.OTH:
        professionalType = 'OTH';
        break;
      default:
        break;
    }
    return professionalType;
  }

  convertProfessionalTypeFromDBFormat(professionalType: string) {
    switch (professionalType) {
      case 'CON':
        professionalType = DoctorType.CON;
        break;
      case 'COUN':
        professionalType = DoctorType.COUN;
        break;
      case 'GEN':
        professionalType = DoctorType.GEN;
        break;
      case 'OTH':
        professionalType = DoctorType.OTH;
        break;
      default:
        break;
    }
    return professionalType;
  }

  calculateAgeFromJavaBirthdayDate(birthday: any) {
    const birthdayD = new Date(birthday);
    const today = new Date();
    let thisYear = 0;
    if (today.getMonth() < birthdayD.getMonth()) {
      thisYear = 1;
    } else if ((today.getMonth() === birthdayD.getMonth()) && today.getDate() < birthdayD.getDate()) {
      thisYear = 1;
    }
    const age = today.getFullYear() - birthdayD.getFullYear() - thisYear;
    return age;
  }

  private loadAvailableSlots(dummyAppointmentSlotArray: FixedDoctorDate [], fixedDoctorDates: FixedDoctorDate[]) {
    dummyAppointmentSlotArray.forEach((dummyAppointmentSlot, index) => {
      dummyAppointmentSlot.workingTimePeriods.forEach((workingTimePeriod, j) => {
        if (fixedDoctorDates[index] &&
            fixedDoctorDates[index].workingTimePeriods &&
            fixedDoctorDates[index].workingTimePeriods[j]) {
          workingTimePeriod.isActive = true;
          workingTimePeriod.startTime = fixedDoctorDates[index].workingTimePeriods[j].startTime;
          workingTimePeriod.endTime = fixedDoctorDates[index].workingTimePeriods[j].endTime;
        }
      });
    });
  }
}
