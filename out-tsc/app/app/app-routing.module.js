import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './components/signup/sign-up.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchProfessionalsMainComponent } from './components/search-professionals-main/search-professionals-main.component';
import { BookingEnterTimeComponent } from './components/booking-enter-time/booking-enter-time.component';
import { BookingEnterComponent } from './components/booking-enter/booking-enter.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientBookingListComponent } from './components/patient-booking-list/patient-booking-list.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorScheduleComponent } from './components/doctor-schedule/doctor-schedule.component';
import { DoctorSideBookingListComponent } from './components/doctor-side-booking-list/doctor-side-booking-list.component';
import { DoctorSideBookingComponent } from './components/doctor-side-booking/doctor-side-booking.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { PrescriptionListComponent } from './components/prescription-list/prescription-list.component';
const routes = [
    { path: '', component: LandingPageComponent },
    { path: 'index', component: LandingPageComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'searchProfessionals', component: SearchProfessionalsMainComponent },
    { path: 'appointmentTime', component: BookingEnterTimeComponent },
    { path: 'confirmation', component: BookingEnterComponent },
    { path: 'success', component: PaymentSuccessComponent },
    { path: 'user/dashboard', component: PatientProfileComponent },
    { path: 'user/appointments', component: PatientBookingListComponent },
    { path: 'doctor/dashboard', component: DoctorProfileComponent },
    { path: 'doctor/schedule', component: DoctorScheduleComponent },
    { path: 'doctor/appointments', component: DoctorSideBookingListComponent },
    { path: 'appointment', component: DoctorSideBookingComponent },
    { path: 'appointment/prescriptionList', component: PrescriptionListComponent },
    { path: 'appointment/prescription', component: PrescriptionComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map