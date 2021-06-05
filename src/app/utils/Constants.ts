export enum Constants {
    // endpoints
    // API_BASE_URL = 'http://Ezmed-env.ap-south-1.elasticbeanstalk.com:80',
    API_BASE_URL = 'http://localhost:5000',
    // FE_BASE_URL = 'http://www.ezmed.lk',
    FE_BASE_URL = 'http://localhost:4200',
    AUTHENTICATION = 'test',
    CREATE_NEW_USER = '/user/register',
    VERIFY_EMAIL_ACCOUNT = '/user/registrationConfirm',
    LOAD_CONFIGURATIONS = '/admin/configs',
    UPLOAD_USER_PROFILE_PIC = '/userImages/upload/profilePic/',
    DOWNLOAD_USER_PROFILE_PIC = '/userImages/download/profilePic/',
    UPLOAD_USER_SIGN = '/userImages/upload/signature/',
    DOWNLOAD_USER_SIGN = '/userImages/download/signature/',
    UPLOAD_USER_STAMP = '/userImages/upload/stamp/',
    DOWNLOAD_USER_STAMP = '/userImages/download/stamp/',
    MEDICAL_REPORT_DOC_UPLOAD = '/docs/medical-reports/',
    MEDICAL_REPORT_DOC_DOWNLOAD = '/docs/medical-report/',
    MEDICAL_REPORT_DOC_LIST_DOWNLOAD = '/docs/medical-reports-summary-list/',
    MEDICAL_REPORT_DOC_DELETE = '/docs/medical-reports/',
    LOAD_PRESCRIPTION = '/appointment/prescriptionById/',
    ADD_PRESCRIPTION = '/appointment/add-prescription',
    GENERATE_PRESCRIPTION = '/appointment/generate-prescription/',
    SET_PRESCRIPTION_STATUS = '/appointment/prescription/set-status/',
    LOAD_PRESCRIPTION_LIST = '/appointment/prescriptionList/',
    USER_APPOINTMENTS = '/appointment/appointments/',
    USER_APPOINTMENT_SET_STATUS = '/appointment/set-status/',
    USER_APPOINTMENT_CONCERN = '/appointment/set-concern/',
    APPOINTMENT_BY_ID = '/appointment/appointmentById/',
    LOAD_MEDICAL_HISTORY_FOR_APPOINTMENT = '/appointment/medicalHistoryForAppointment/',
    LOAD_MEDICAL_HISTORY_FOR_USER = '/appointment/medicalHistoryForUser/',
    ADD_APPOINTMENT = '/appointment/add-appointment/',
    PROFESSIONAL_SEARCH = '/doctor/doctorSearch/advanced/',
    UPDATE_USER_SPECIFIC_DATA = '/user/specific-data/',
    UPDATE_PROFESSIONAL_WORK_DATA = '/user/doctor/work-data/',
    APPOINTMENT_PAYMENT = '/payment/',
    GET_USER_DATA = '/user/user-data/',
    GET_USER_DATA_BY_ID = '/user/user-data-by-id/',
    AUTHENTICATE = '/authenticate',
    AVAILABLE_APPOINTMENTS_FOR_A_PROFESSIONAL = '/doctor/available-appointments/',

    // payment
    CLI_ID = 14004356,

    // modal types
    MODAL_TYPE_SIGN_UP = 'SIGN_UP',
    MODAL_TYPE_PROFILE = 'PROFILE',
    EZ_MED_AUTH = 'EZ_MED_AUTH'
}

export enum DoctorTitles {
    DR = 'Dr',
    MR = 'Mr',
    MRS = 'Mrs',
    MS = 'Ms',
    PROF = 'Prof',
}

export const PatientTitles = [
    'Dr',
    'Mr',
    'Mrs',
    'Ms',
    'Prof'
];

export enum MODAL_TYPES {
    LOADING = 'LOADING',
    ERROR = 'ERROR_',
    ENTER_VACATION_MODE = 'ENTER_VACATION_MODE',
    EXIT_VACATION_MODE = 'EXIT_VACATION_MODE'
}

export enum TRANSITION_PAGE_TYPE {
    LOGIN_REDIRECT = 'LOGIN_REDIRECT'
}

export enum currencyCodes {
    LKR = 'LKR',
    USD = 'USD',
    GBP = 'GBP',
    JPY = 'JPY',
    EUR = 'EUR',
}

export enum DoctorType {
    CON = 'Consultant',
    COUN = 'Counselor',
    GEN = 'General Practitioner',
    OTH = 'Other Medical Professional'
}

export enum APPOINTMENT_STATUS {
    DUMMY,
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED,
    CANCELLED_BY_PATIENT,
    CANCELLED_BY_DOCTOR
}
