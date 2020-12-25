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
  convertDoctorType(doctorType: string) {
    switch (doctorType) {
      case DoctorType.CON:
        doctorType = 'CON';
        break;
      case DoctorType.COUN:
        doctorType = 'COUN';
        break;
      case DoctorType.GEN:
        doctorType = 'GEN';
        break;
      case DoctorType.OTH:
        doctorType = 'OTH';
        break;
      default:
        break;
    }
    return doctorType;
  }

}
