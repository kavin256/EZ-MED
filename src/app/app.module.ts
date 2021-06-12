import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/signup/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DoctorScheduleComponent } from './components/doctor-schedule/doctor-schedule.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { SearchProfessionalsMainComponent } from './components/search-professionals-main/search-professionals-main.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { PaymentConfirmationComponent } from './components/payment-confirmation/payment-confirmation.component';
import { AppointmentEnterTimeComponent } from './components/appointment-enter-time/appointment-enter-time.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { DoctorFinanceComponent } from './components/doctor-finance/doctor-finance.component';
import {NgbAlertModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { ModalComponent } from './components/modal/modal.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfessionalCardComponent } from './components/professional-card/professional-card.component';
import { ChatSectionComponent } from './components/chat-section/chat-section.component';
import { PrescriptionListComponent } from './components/prescription-list/prescription-list.component';
import {AppService} from './app.service';
import {DatePipe} from '@angular/common';
import { TransitionPageComponent } from './components/transition-page/transition-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material';
import { MedicalReportsComponent } from './components/medical-reports/medical-reports.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { VerificationComponent } from './components/verification/verification.component';

export function initialize(app: AppService) {
    return async () => {
        await app.loadModuleConfigurations();
        await app.loadPermissions();
        await app.userLogin();
    };
}

@NgModule({
    declarations: [
        AppComponent,
        SignUpComponent,
        HeaderComponent,
        FooterComponent,
        LandingPageComponent,
        DoctorScheduleComponent,
        DoctorProfileComponent,
        AppointmentComponent,
        ContactPageComponent,
        FaqsComponent,
        PrescriptionComponent,
        PaymentConfirmationComponent,
        AppointmentEnterTimeComponent,
        PaymentSuccessComponent,
        DoctorFinanceComponent,
        PatientProfileComponent,
        SearchProfessionalsMainComponent,
        PageTitleComponent,
        AppointmentListComponent,
        ModalComponent,
        ProfessionalCardComponent,
        ChatSectionComponent,
        PrescriptionListComponent,
        TransitionPageComponent,
        MedicalReportsComponent,
        VerificationComponent
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
        MatDatepickerModule,
        MatCheckboxModule,
        NgbTimepickerModule,
        NgbAlertModule,
        MatDialogModule,
        HttpClientModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatRadioModule,
        MatTabsModule,
        MatSnackBarModule,
        NgxMaterialTimepickerModule
    ],
  providers: [
      DatePipe,
      {
          provide: APP_INITIALIZER,
          useFactory: initialize,
          deps: [AppService],
          multi: true
      }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ModalComponent ]
})
export class AppModule { }
