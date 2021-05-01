export class MedicalRecord {
    id?: number;
    issuedDate: Date;
    bookingId: number;
    medicalConcern?: string;
    status?: number;
    professionalId?: string;
    patientId?: string;
    professionalName?: string;
    patientName?: string;
    prescribedItems?: any;
    prescribedNoteItems?: any;
}
