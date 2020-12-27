import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SessionStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient = {
    id: 1,
    title: 'Mr.',
    birthday: '03-05-1994',
    age: 31,
    name: 'John Doe',
    medicalHistory: 'long term gastritis patient',
    allergies: 'allergic to hindi songs',
  };

  titles = [
    {value: 'Dr.'},
    {value: 'Mr.'},
    {value: 'Mrs.'},
    {value: 'Ms.'},
    {value: 'Prof.'}
  ];

  title = 'MY PROFILE';
  editable = false;

  constructor(
      private router: Router,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser)));
  }

  goToMyAppointments() {
    this.router.navigate(['user/appointments']).then(r => {
    });
  }

  toggleEditable(editable: boolean) {
    this.editable = editable;
  }

  logOut() {
    sessionStorage.clear();
    // location.reload();
    this.router.navigate(['signup']).then(r => {});
  }
}
