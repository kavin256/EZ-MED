import {UserData} from './user-data';
import {Time} from '@angular/common';
import {APPOINTMENT_STATUS} from '../utils/Constants';

export class AppointmentData {
    doctorId: number;
    patientId: number;
    appointmentDate: string;
    appointmentTime: Time;
    appointmentId: number;
    status: APPOINTMENT_STATUS;
    price: any;
    timeSlotId: number;
    durationInMinutes: number;
    doctorData: UserData;
    patientData: UserData;
}
