import {Prescription} from './prescription';

export class MedicalRecord {
    appointmentDate: Date;
    appointmentId: number;
    medicalConcern?: string;
    patientId?: string;
    patientName?: string;
    professionalId?: string;
    professionalName?: string;
    prescriptions?: Prescription [];
}
