export var Constants;
(function (Constants) {
    // endpoints
    Constants["BASE_URL"] = "http://localhost:8080";
    Constants["AUTHENTICATION"] = "test";
    Constants["CREATE_NEW_USER"] = "/user/register";
    Constants["UPLOAD_USER_IMAGE"] = "/user/upload/image";
    Constants["PROFESSIONAL_SEARCH"] = "/doctor/doctorSearch/advanced/";
    Constants["UPDATE_PROFESSIONAL_SPECIFIC_DATA"] = "/user/doctor/data/";
    Constants["UPDATE_PROFESSIONAL_WORK_DATA"] = "/user/doctor/work-data/";
    Constants["GET_USER_DATA"] = "/user/user-data/";
    Constants["AUTHENTICATE"] = "/authenticate";
    Constants["AVAILABLE_APPOINTMENTS_FOR_A_PROFESSIONAL"] = "/doctor/available-appointments/";
    // UPDATE_PROFESSIONAL_WORK_DATA = '/user/test?username=dfg',
    // modal types
    Constants["MODAL_TYPE_SIGN_UP"] = "SIGN_UP";
    Constants["MODAL_TYPE_PROFILE"] = "PROFILE";
    Constants["EZ_MED_AUTH"] = "EZ_MED_AUTH";
})(Constants || (Constants = {}));
export var DoctorTitles;
(function (DoctorTitles) {
    DoctorTitles["DR"] = "Dr";
    DoctorTitles["MR"] = "Mr";
    DoctorTitles["MRS"] = "Mrs";
    DoctorTitles["MS"] = "Ms";
    DoctorTitles["PROF"] = "Prof";
})(DoctorTitles || (DoctorTitles = {}));
export const PatientTitles = [
    'Dr',
    'Mr',
    'Mrs',
    'Ms',
    'Prof'
];
export var MODAL_TYPES;
(function (MODAL_TYPES) {
    MODAL_TYPES["LOADING"] = "LOADING";
})(MODAL_TYPES || (MODAL_TYPES = {}));
export var TRANSITION_PAGE_TYPE;
(function (TRANSITION_PAGE_TYPE) {
    TRANSITION_PAGE_TYPE["LOGIN_REDIRECT"] = "LOGIN_REDIRECT";
})(TRANSITION_PAGE_TYPE || (TRANSITION_PAGE_TYPE = {}));
export var currencyCodes;
(function (currencyCodes) {
    currencyCodes["LKR"] = "LKR";
    currencyCodes["USD"] = "USD";
    currencyCodes["GBP"] = "GBP";
    currencyCodes["JPY"] = "JPY";
    currencyCodes["EUR"] = "EUR";
})(currencyCodes || (currencyCodes = {}));
export var DoctorType;
(function (DoctorType) {
    DoctorType["CON"] = "Consultant";
    DoctorType["COUN"] = "Counselor";
    DoctorType["GEN"] = "General Practitioner";
    DoctorType["OTH"] = "Other Medical Practitioner";
})(DoctorType || (DoctorType = {}));
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
//# sourceMappingURL=Constants.js.map
