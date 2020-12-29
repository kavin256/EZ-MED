import { Injectable } from '@angular/core';
import {Constants, DoctorType} from '../utils/Constants';
import {startCase, camelCase} from 'lodash';
import {Router} from '@angular/router';
import {UserData} from '../models/user-data';
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

          return {
            "patientData": null,
            "doctorData": {
              "userName": "dfg",
              "title": "Dr",
              "firstName": "John",
              "lastName": "Doe",
              "professionalType": "CON",
              "specialityA": "Pulmonologist",
              "specialityB": "Dermatologist",
              "specialityC": "",
              "regNo": "reg/34234235",
              "qualifications": "MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India",
              "priceForAppointment": '',
              "availableForAppointment": false
            },
            "doctor": true
          };
          return {
            "patientData": {
              "userName": "kavin88@abc.com",
              "title": "Mr",
              "firstName": "Milinda",
              "lastName": "Sandaruwan",
              "birthday": "1994-12-31T00:00:00.000+0000",
              "address": null,
              "contactNumber": "0123456789",
              "whatsAppNumber": "0123456789",
              "userAllergies": "mata allergies nehe",
              "male": false
            },
            "doctorData": null,
            "doctor": false
          };
        }
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
}
