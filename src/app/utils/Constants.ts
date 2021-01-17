export enum Constants {
    // endpoints
    // BASE_URL = 'http://TestApp-env.eba-j2nv42tb.ap-south-1.elasticbeanstalk.com:80',
    BASE_URL = 'http://localhost:5000',
    AUTHENTICATION = 'test',
    CREATE_NEW_USER = '/user/register',
    UPLOAD_USER_IMAGE = '/image/upload/',
    DOWNLOAD_USER_IMAGE = '/image/download/',
    USER_APPOINTMENTS = '/user-appointments/',
    PROFESSIONAL_SEARCH = '/doctor/doctorSearch/advanced/',
    UPDATE_PROFESSIONAL_SPECIFIC_DATA = '/user/specific-data/',
    UPDATE_PROFESSIONAL_WORK_DATA = '/user/doctor/work-data/',
    GET_USER_DATA = '/user/user-data/',
    AUTHENTICATE = '/authenticate',
    AVAILABLE_APPOINTMENTS_FOR_A_PROFESSIONAL = '/doctor/available-appointments/',

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
    OTH = 'Other Medical Practitioner'
}

export const specializationsCON = [
    'Any',
    'Immunologist',
    'Cardiologist',
    'Pulmonologist',
    'Radiologist',
    'Dermatologist',
    'ClinicalNutritionist',
    'Endocrinologist'
    ];

export const specializationsCOUN = [
    'Any',
    'Immunologist',
    'Cardiologist',
    'Pulmonologist',
    'Radiologist',
    'Dermatologist',
    'ClinicalNutritionist',
    'Endocrinologist'
    ];

export const specializationsOTH = [
    'Any',
    'Nutritionist',
    'Dieticians',
    'Psychologist',
    'Occupational Therapist',
    'Physiotherapist',
    'SpeechAndLanguageTherapist',
    'Clinical Audiologist'
    ];
