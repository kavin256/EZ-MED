export enum Constants {
    // endpoints
    BASE_URL = 'http://localhost:8080',
    AUTHENTICATION = 'test',
    CREATE_NEW_USER = '/user/register',
    UPLOAD_USER_IMAGE = '/user/upload/image',

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
    SIGN_UP = 'SIGN_UP',
    PROFILE = 'PROFILE',
}

export enum currencyCodes {
    LKR = 'LKR',
    USD = 'USD',
    GBP = 'GBP',
    JPY = 'JPY',
    EUR = 'EUR',
}

export enum Specializations {
    None = 'None',
    Immunologist = 'Immunologist',
    Cardiologist = 'Cardiologist',
    Pulmonologist = 'Pulmonologist',
    Radiologist = 'Radiologist',
    Dermatologist = 'Dermatologist',
    Clinical_Nutritionist = 'Clinical Nutritionist',
    Endocrinologist = 'Endocrinologist',
}

export enum DoctorType {
    ANY = 'ANY',
    CONSULTANT = 'Consultant',
    GENERAL_PRACTITIONER = 'General Practitioner',
    SUPPORT_MEDICAL_SERVICE = 'Other Medical Practitioner'
}
