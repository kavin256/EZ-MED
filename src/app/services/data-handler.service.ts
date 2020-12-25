import { Injectable } from '@angular/core';
import {DoctorType} from '../utils/Constants';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

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
