import { Component, OnInit } from '@angular/core';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {DataLoaderService} from '../../services/data-loader.service';
import {DoctorType} from '../../utils/Constants';
import {DoctorSpecificData, UserData} from '../../models/user-data';
import {Router} from '@angular/router';
import {BookingStatus} from '../appointment-list/appointment-list.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

    inProgress = false;
    isConfirmationActive = false;
    changeRequestSent = false;
    doctorSide = false;
    booking = {
      id: 2387,
      createdDateTime: new Date(2020, 4, 20, 10, 45),
      appointmentDateTime: new Date(2020, 4, 21, 10, 0),
      durationInMinutes: 15,
      status: BookingStatus.BOOKING_NOT_STARTED,
      price: 'Rs. 2000.00',
      doctorNotes: [],
      userNotes: [],
      cancellationRule: '',
      messageThread:
          [
              {
                  sender: 'doctor',
                  message: 'jhbsdkcsd'
              },
              {
                  sender: 'patient',
                  message: 'jhbsdddfdfdkcsd'
              },
              {
                  sender: 'doctor',
                  message: 'hgvbhashjd'
              }
          ]
  };
  patient: UserData = {
      userId: '76531',
      title: 'Mr',
      firstName: 'John',
      lastName: 'Doe',
      contactNumber: '0773092511', whatsAppNumber: '0773092511', email: 'kavin256@gmail.com',
      birthday: new Date(1993, 4, 21).toLocaleDateString('en-US'),
      age: this.dataHandlerService.calculateAgeFromJavaBirthdayDate('1995/03/04'),
      doctor: false,
      userAllergies: 'allergic to bad music, allergic to negative people'
  };

  doctor: DoctorSpecificData = {
      contactNumber: '0773092511',
      regNo: '4352545235',
      whatsAppNumber: '0773092511',
      email: 'nuwanchinthaka@gmail.com',
      title: 'Dr.',
      firstName: 'Nuwan',
      lastName: 'Chinthaka',
      doctorType: DoctorType.CON,
      qualifications: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
      specialityA: 'Consultant Neurologist',
      specialityB: 'Consultant Neurologist',
      specialityC: 'Consultant Neurologist',
      priceForAppointment: 'Rs. 2000.00'
    };
  loggedInUser: UserData = null;
  isPatientDetailsShown = true;
  private selectedProfessionalUserId: string;

  constructor(
      private router: Router,
      private dataHandlerService: DataHandlerService,
      private dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {
      // if not logged In this page should not be able to access
      if (localStorage.getItem(LocalStorageKeys.loggedInUser)) {
          this.loggedInUser = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
          this.doctorSide = this.loggedInUser.doctor;
      }
      this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
      this.selectedProfessionalUserId = localStorage.getItem(LocalStorageKeys.selectedProfessionalUserId);
      this.loadProfessionalData(this.selectedProfessionalUserId);
  }

  userConsent() {
      this.isConfirmationActive = !this.isConfirmationActive;
  }

  private loadProfessionalData(selectedProfessionalUserId: any) {
      this.dataHandlerService.loadUserDataSimple(selectedProfessionalUserId, this.dataLoaderService)
          .then((data: any) => {
              this.doctor = data;
          });
  }

  cancel() {
      // this.updateSchedule();
      this.isConfirmationActive = false;
      this.changeRequestSent = true;
      this.booking.status = BookingStatus.BOOKING_CANCELLED;
  }

  dismiss() {
      this.isConfirmationActive = false;
      this.changeRequestSent = false;
  }

    goBack() {
        this.router.navigate(['appointments']).then(r => {
        });
    }
}
