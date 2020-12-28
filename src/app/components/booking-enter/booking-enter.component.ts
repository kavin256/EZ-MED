import { Component, OnInit } from '@angular/core';
import {DoctorType} from '../../utils/Constants';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {LocalStorageKeys} from '../../services/data-store.service';

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
    consultationPrice: 'Rs. 2000.00',
    isSkypePreferred: true,
    isWhatsAppPreferred: false
  };

  isScheduleVisible = false;
  isPatientSkypeAvailable = false;
  media = [
    {value: 'skype', viewValue: 'Skype'},
    {value: 'whatsapp', viewValue: 'Whatsapp'}
  ];

  constructor(
      private router: Router,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
  }

  scheduleVisibilityToggle($event: boolean) {
      this.isScheduleVisible = $event;
  }

  saveSkype(b: boolean) {
    //
  }

    goBack() {
      this.router.navigate(['appointmentTime']).then(r => {
      });
    }
}
