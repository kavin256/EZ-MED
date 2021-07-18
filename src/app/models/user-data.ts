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
    editableMode?: boolean;
    bio?: string;
    userAllergies?: string;
    regNo?: string;
    priceForAppointment?: string;
    rate?: Rate;
    qualifications?: string;
    professionalType?: string;
    specialityA?: string;
    specialityB?: string;
    nextAvailableTime?: string;
    specialityC?: string;
    nextTime?: string;
    availableForAppointment?: string;
}

export class WorkingTimePeriod {
    startTime: string;
    endTime: string;
    isActive?: boolean;
    startTimeSelected?: { hour: number; minute: number };
    endTimeSelected?: { hour: number; minute: number };
}

export class Rate {
    appliedPromoCodes: string [];
    cancellationFee: number;
    cost: number;
    dueAmount: number;
    margin: number;
    paidAmount: number;
    price: number;
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
