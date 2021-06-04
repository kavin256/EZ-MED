import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './components/signup/sign-up.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {SearchProfessionalsMainComponent} from './components/search-professionals-main/search-professionals-main.component';
import {AppointmentEnterTimeComponent} from './components/booking-enter-time/booking-enter-time.component';
import {PaymentConfirmationComponent} from './components/payment-confirmation/payment-confirmation.component';
import {PaymentSuccessComponent} from './components/payment-success/payment-success.component';
import {PatientProfileComponent} from './components/patient-profile/patient-profile.component';
import {AppointmentListComponent} from './components/appointment-list/appointment-list.component';
import {DoctorProfileComponent} from './components/doctor-profile/doctor-profile.component';
import {DoctorScheduleComponent} from './components/doctor-schedule/doctor-schedule.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import {PrescriptionComponent} from './components/prescription/prescription.component';
import {PrescriptionListComponent} from './components/prescription-list/prescription-list.component';
import {MedicalReportsComponent} from './components/medical-reports/medical-reports.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'index', component: LandingPageComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'searchProfessionals', component: SearchProfessionalsMainComponent },
    { path: 'appointmentTime', component: AppointmentEnterTimeComponent },
    { path: 'confirmation', component: PaymentConfirmationComponent },
    { path: 'success', component: PaymentSuccessComponent },
    { path: 'user/dashboard', component: PatientProfileComponent },
    { path: 'appointments', component: AppointmentListComponent },
    { path: 'doctor/dashboard', component: DoctorProfileComponent },
    { path: 'doctor/schedule', component: DoctorScheduleComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: 'appointment/prescriptionList', component: PrescriptionListComponent },
    { path: 'appointment/medicalReports', component: MedicalReportsComponent },
    { path: 'appointment/prescription', component: PrescriptionComponent }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
