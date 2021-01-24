import { Component, OnInit } from '@angular/core';
import {Constants, DoctorType} from '../../utils/Constants';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {LocalStorageKeys} from '../../services/data-store.service';
import {config} from 'rxjs';

@Component({
  selector: 'app-booking-enter',
  templateUrl: './booking-enter.component.html',
  styleUrls: ['./booking-enter.component.css']
})
export class BookingEnterComponent implements OnInit {

  doctor = {
    id: 1,
    name: 'Dr. Nuwan chinthaka',
    professionalType: DoctorType.CON,
    bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
    specialities: [
      'Consultant Neurologist',
      'Consultant Pediatrician'
    ],
    priceForAppointment: 'Rs. 2000.00',
    isSkypePreferred: true,
    isWhatsAppPreferred: false
  };

  isScheduleVisible = false;
  isPatientSkypeAvailable = false;
  media = [
    {value: 'skype', viewValue: 'Skype'},
    {value: 'whatsapp', viewValue: 'Whatsapp'}
  ];
  private selectedProfessionalUsername: string;

  constructor(
      private router: Router,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    this.selectedProfessionalUsername = localStorage.getItem(LocalStorageKeys.selectedProfessionalUsername);
    this.loadProfessionalData(this.selectedProfessionalUsername);

    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
  }

  private loadProfessionalData(selectedProfessionalUsername: any) {
    this.dataHandlerService.loadUserDataSimple(selectedProfessionalUsername, this.dataLoaderService)
        .then((data: any) => {
          this.doctor = data;
        });
  }

  scheduleVisibilityToggle($event: boolean) {
      this.isScheduleVisible = $event;
  }

  saveSkype(b: boolean) {
    //
  }

  goBack() {
    this.router.navigate(['appointmentTime']).then(r => {});
  }

  payment() {
    window.location.href = Constants.FE_BASE_URL + '/static-pages/payment.html';
  }
}
