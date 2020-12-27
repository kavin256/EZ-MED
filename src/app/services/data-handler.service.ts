import { Injectable } from '@angular/core';
import {DoctorType} from '../utils/Constants';
import {startCase, camelCase} from 'lodash';
import {Router} from '@angular/router';
import {UserData} from '../models/user-data';

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

  redirectToSignUpIfNotLoggedIn(loggedInUser: any) {
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

}
