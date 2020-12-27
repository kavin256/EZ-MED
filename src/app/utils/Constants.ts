export enum Constants {
    // endpoints
    BASE_URL = 'http://localhost:8080',
    AUTHENTICATION = 'test',
    CREATE_NEW_USER = '/user/register',
    UPLOAD_USER_IMAGE = '/user/upload/image',
    PROFESSIONAL_SEARCH = '/doctor/doctorSearch/advanced/',
    UPDATE_PROFESSIONAL_SPECIFIC_DATA = '/user/doctor/data/',
    UPDATE_PROFESSIONAL_WORK_DATA = '/user/doctor/work-data/',
    GET_USER_DATA = '/user/user-data/',
    AVAILABLE_APPOINTMENTS_FOR_A_PROFESSIONAL = '/doctor/available-appointments/',
    // UPDATE_PROFESSIONAL_WORK_DATA = '/user/test?username=dfg',

    // modal types
    MODAL_TYPE_SIGN_UP = 'SIGN_UP',
    MODAL_TYPE_PROFILE = 'PROFILE',
    EZMED_AUTH = 'EZMED_AUTH'
}

export enum DoctorTitles {
    DR = 'Dr',
    MR = 'Mr',
    MRS = 'Mrs',
    MS = 'Ms',
    PROF = 'Prof',
}

export enum MODAL_TYPES {
    LOADING = 'LOADING'
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

export const specializations = [
    'Any',
    'Immunologist',
    'Cardiologist',
    'Pulmonologist',
    'Radiologist',
    'Dermatologist',
    'ClinicalNutritionist',
    'Endocrinologist'
    ];
