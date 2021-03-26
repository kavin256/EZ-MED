import {UserData} from './user-data';
import {Time} from '@angular/common';

export class AppointmentData {
    doctorId: number;
    patientId: number;
    appointmentDate: string;
    appointmentTime: Time;
    appointmentId: number;
    status: any;
    price: any;
    timeSlotId: number;
    durationInMinutes: number;
    doctorData: UserData;
    patientData: UserData;
}
