export class UserData {
    userId?: string;
    password?: string;
    title: string;
    firstName: string;
    lastName?: string;
    male?: boolean;
    birthday?: any;
    age?: any;
    contactNumber: string;
    whatsAppNumber?: string;
    email?: string;
    doctor?: boolean;
    userAllergies?: string;
    regNo?: string;
    priceForAppointment?: string;
    qualifications?: string;
    professionalType?: string;
    specialityA?: string;
    specialityB?: string;
    specialityC?: string;
    availableForAppointment?: string;
    doctorType?: string;
}

export class WorkingTimePeriod {
    startTime: string;
    endTime: string;
    isActive?: boolean;
    startTimeSelected?: { hour: number; minute: number };
    endTimeSelected?: { hour: number; minute: number };
}

export class FixedDoctorDate {
    day: number;
    workingTimePeriods: WorkingTimePeriod [];
    title?: string;
}

export class DoctorScheduleData {
    averageTimeForAppointment: number;
    fixedDoctorDates: FixedDoctorDate [];
}

export class DoctorSpecificData {
    userId?: string;
    id?: string;
    title: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    whatsAppNumber: string;
    email: string;
    regNo: string;
    priceForAppointment: string;
    qualifications: string;
    professionalType?: string;
    specialityA?: string;
    specialityB?: string;
    specialityC?: string;
    availableForAppointment?: string;
    doctorType?: string;
}

