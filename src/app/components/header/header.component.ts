import {Component, AfterViewInit, Input, OnInit} from '@angular/core';
import './header.component.css';
import {Router} from '@angular/router';
import {DataKey, DataStoreService, SessionStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  signUpResultObject = {
    isSignUp: undefined,
    userType: undefined
  };
  loggedInUser = null;
  user = null;
  firstName: string;
  isSignUp = true;

  userType;

  constructor(
              private dataHandlerService: DataHandlerService,
              private router: Router,
              private dataStore: DataStoreService
  ) {}

  ngOnInit() {
    if (sessionStorage.getItem(SessionStorageKeys.loggedInUser)) {
      this.loggedInUser = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));
    }
    this.firstName = null;
    if (this.loggedInUser) {
      this.firstName = this.setFirstName(this.loggedInUser);
    }
    if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
      this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
      this.userType = this.signUpResultObject.userType;
      this.isSignUp = this.signUpResultObject.isSignUp;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => { window.scroll(0, 0); }, 1000);
  }

  logoClick(): void {
    if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
      this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
      this.userType = this.signUpResultObject.userType;
      this.isSignUp = this.signUpResultObject.isSignUp;
    }
    if (this.loggedInUser && this.loggedInUser.doctor !== null && this.loggedInUser.doctor) {
      this.router.navigate(['doctor/dashboard']).then(r => {
      });
    } else if (this.loggedInUser && this.loggedInUser.doctor !== null && !this.loggedInUser.doctor) {
      this.router.navigate(['user/dashboard']).then(r => {
      });
    } else {
      this.router.navigate(['signup']).then(r => {
      });
    }
  }

  goToHomePage() {
    this.router.navigate(['/']).then(r => {
    });
  }

  private setFirstName(loggedInUser: any): string {
    let fName = null;
    if (loggedInUser && loggedInUser.doctor) {
      // todo: uncomment
      // fName = loggedInUser.doctorData.firstName;
      fName = loggedInUser.firstName;
    } else if (loggedInUser && !loggedInUser.doctor) {
      // todo: uncomment
      // fName = loggedInUser.patientData.firstName;
      fName = loggedInUser.firstName;
    }
    return fName;
  }
}
