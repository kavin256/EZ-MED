import { UserData } from "./user-data";

export class Prescription {
    id: number;
    bookingId: number;
    issuedDate: Date;
    description: string;
    status: number;
    lightPatient: UserData;
    lightDoctor: UserData;
    professionalId: number;
    patientId: number;
}
