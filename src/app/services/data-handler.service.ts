import { Injectable } from '@angular/core';
import {Constants, DoctorType} from '../utils/Constants';
import {startCase, camelCase} from 'lodash';
import {Router} from '@angular/router';
import {FixedDoctorDate, UserData} from '../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {LocalStorageKeys} from './data-store.service';
import {DataLoaderService} from './data-loader.service';
import {ConfigModel} from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  configurationsMap: Map<string, string>;

  constructor() { }

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

  isMandatoryDetailsFilled(user: UserData) {
    let result = false;
    if (user) {
      result = true;
      if (user.doctor) {
        // doc specific
        if (!(
            user.qualifications && user.qualifications !== ''
            && user.professionalType && user.professionalType !== ''
            && user.priceForAppointment && user.priceForAppointment !== '' && parseInt(user.priceForAppointment, 10) > 0
            && user.regNo && user.regNo !== ''
            && user.specialityA && user.specialityA !== ''
        )) {
          result = false;
        }
      } else {
        // patient specific
        if (!(
            user.birthday && user.birthday !== ''
        )) {
          result = false;
        }
      }
      // common
      if (!(
          user.title && user.title !== ''
          && user.firstName && user.firstName !== ''
          && user.lastName && user.lastName !== ''
          && user.male !== null && user.male !== undefined
          && user.birthday && user.birthday !== ''
          && user.contactNumber && user.contactNumber !== ''
          && user.whatsAppNumber && user.whatsAppNumber !== ''
      )) {
        result = false;
      }
    }

    return result;
  }

  redirectToSignUpIfNotLoggedIn(loggedInUser: UserData, router) {
    if (loggedInUser && loggedInUser.userId) {
    } else {
      router.navigate(['signup']).then(r => {});
    }
  }

  convertDateFormat(date: Date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();
    return {dd, mm, yyyy};
  }

  createNewDummyAppointmentSlotArrayForWeek(fixedDoctorDates: FixedDoctorDate [])  {
    const dummyAppointmentSlotArray = [];
    for (let i = 1; i < 8; i++) {
      dummyAppointmentSlotArray.push(this.fillDummyAppointmentSlot(i, 3));
    }
    this.loadAvailableSlots(dummyAppointmentSlotArray, fixedDoctorDates);
    return dummyAppointmentSlotArray;
  }

  fillDummyAppointmentSlot(dayNo: number, numberOfTimeSlots: number) {
    const workingTimePeriods = [];
    return {
      day: dayNo,
      workingTimePeriods
    };
  }

  redirectFromSignUpIfLoggedIn(loggedInUser: UserData, router: Router) {
    if (loggedInUser && loggedInUser.userId && loggedInUser.doctor) {
      router.navigate(['doctor/dashboard']).then(r => {});
    } else if (loggedInUser && loggedInUser.userId && !loggedInUser.doctor) {
      router.navigate(['user/dashboard']).then(r => {});
    }
  }

  logOut(router: Router) {
    sessionStorage.clear();
    location.reload();
    router.navigate(['signup']).then(r => {});
  }

  setConfigs(configurations: ConfigModel []) {
    this.configurationsMap = new Map<string, string>();
    configurations.forEach((configuration) => {
      this.configurationsMap.set(configuration.name, configuration.value);
    });
  }

  loadConfig(configurationName: string) {
    return this.configurationsMap.get(configurationName);
  }

  loadUserData(userName: string, dataLoaderService: DataLoaderService, router: Router): any {
    let userData = null;
    const url = Constants.API_BASE_URL + Constants.GET_USER_DATA + userName;
    dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
      .then((data: any) => {
        if (data && data.status && data.status.code === 1) {
          userData = data.data[0];
          sessionStorage.setItem(LocalStorageKeys.loggedInUser, JSON.stringify(userData));
          const user = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));
          if (user && user.doctor) {
            router.navigate(['doctor/dashboard']).then(r => {
              location.reload();
            });
          } else if (user && !user.doctor) {
            router.navigate(['user/dashboard']).then(r => {
              location.reload();
            });
          }
        } else if (data && data.status && data.status.code === -1) {
          sessionStorage.setItem(LocalStorageKeys.loggedInUser, null);
          return null;
        }
      });
  }

  loadUserDataUsingUserId(userId: string, dataLoaderService: DataLoaderService): any {
    return new Promise(resolve => {
      const url = Constants.API_BASE_URL + Constants.GET_USER_DATA_BY_ID + userId;
      dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
          .then((data: any) => {
            if (data.data && data.data[0]) {
              resolve(data.data[0]);
            }
          });
    });
  }

  loadUserAppointments(userId: string, dataLoaderService: DataLoaderService, startDate: string, endDate: string,
                       dummyAvailable?: boolean, completedAvailable?: boolean ): any {
    return new Promise(resolve => {
      const url = Constants.API_BASE_URL + Constants.USER_APPOINTMENTS + userId;
      let httpParams = new HttpParams();
      httpParams = httpParams.append('startDate', startDate);
      httpParams = httpParams.append('endDate', endDate);
      httpParams = httpParams.append('dummyAvailable', String(dummyAvailable));
      httpParams = httpParams.append('completedAvailable', String(completedAvailable));
      dataLoaderService.get<UserData>(url, httpParams, new HttpHeaders())
          .then((data: any) => {
            if (data.data && data.data[0]) {
              resolve(data.data[0]);
            }
          });
    });
  }

  loadUserAppointmentById(appointmentId: number, dataLoaderService: DataLoaderService): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const url = Constants.API_BASE_URL + Constants.APPOINTMENT_BY_ID + appointmentId;
      const httpParams = new HttpParams();
      dataLoaderService.get<UserData>(url, httpParams, new HttpHeaders())
          .then((data: any) => {
            if (data.data && data.data[0]) {
              resolve(data.data[0]);
            }
          }).catch((data) => {
            reject(data);
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
          workingTimePeriod.startTime = fixedDoctorDates[index].workingTimePeriods[j].startTime;
          workingTimePeriod.endTime = fixedDoctorDates[index].workingTimePeriods[j].endTime;
        }
      });
    });
  }
}
