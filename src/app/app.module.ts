import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatBadgeModule,
    MatButtonModule, MatButtonToggleModule,
    MatCardModule,
    MatChipsModule, MatDatepickerModule,
    MatDividerModule, MatExpansionModule,
    MatIconModule, MatNativeDateModule,
    MatInputModule, MatListModule, MatOptionModule, MatRadioModule, MatSelectModule,
    MatTabsModule
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonBodyComponent } from './components/common-body/common-body.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DoctorScheduleComponent } from './components/doctor-schedule/doctor-schedule.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { DoctorSideBookingListComponent } from './components/doctor-side-booking-list/doctor-side-booking-list.component';
import { DoctorSideBookingComponent } from './components/doctor-side-booking/doctor-side-booking.component';
import { SearchProfessionalsComponent } from './components/search-professionals/search-professionals.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { BookingEnterComponent } from './components/booking-enter/booking-enter.component';
import { BookingEnterTimeComponent } from './components/booking-enter-time/booking-enter-time.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    CommonBodyComponent,
    LandingPageComponent,
    DoctorScheduleComponent,
    DoctorProfileComponent,
    PatientDashboardComponent,
    DoctorSideBookingListComponent,
    DoctorSideBookingComponent,
    SearchProfessionalsComponent,
    ContactPageComponent,
    FaqsComponent,
    PrescriptionComponent,
    BookingEnterComponent,
    BookingEnterTimeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatChipsModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatTabsModule,
        MatInputModule,
        MatCardModule,
        MatOptionModule,
        MatSelectModule,
        MatListModule,
        ReactiveFormsModule,
        FormsModule,
        MatExpansionModule,
        MatRadioModule,
        MatBadgeModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatDatepickerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
