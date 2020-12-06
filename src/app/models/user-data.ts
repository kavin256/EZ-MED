export class UserData {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    title: string;
    isMale: boolean;
    birthday: any;
    contactNumber: string;
    whatsAppNumber: string;
    doctor: boolean;
    userAllergies: string;
}

export class WorkingTimePeriod {
    startTime: string;
    endTime: string;
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

