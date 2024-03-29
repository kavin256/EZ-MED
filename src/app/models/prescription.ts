import { UserData } from './user-data';

export class Prescription {
    id: number;
    appointmentId: number;
    issuedDate?: Date;
    description?: any;
    prescribedItems?: any;
    prescribedNoteItems?: any;
    status?: number;
    lightPatient?: UserData;
    lightDoctor?: UserData;
    professionalId?: string;
    patientId?: string;
}
