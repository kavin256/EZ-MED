import {Component, AfterViewInit, Input, OnInit} from '@angular/core';
import './header.component.css';
import {Router} from '@angular/router';
import {DataKey, DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
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
  overTheProfilePic = null;
  overTheLogo = null;

  userType;

  constructor(
              private dataHandlerService: DataHandlerService,
              private router: Router,
              private dataStore: DataStoreService
  ) {}

  ngOnInit() {
    if (localStorage.getItem(LocalStorageKeys.loggedInUser)) {
      this.loggedInUser = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
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

  onMouseEnterProfilePic($event: number) {
    this.overTheProfilePic = $event;
  }

  onMouseLeaveProfilePic() {
    this.overTheProfilePic = null;
  }

  isOverTheProfilePic($event: number) {
    return $event === this.overTheProfilePic;
  }

  onMouseEnterLogo() {
    this.overTheLogo = true;
  }

  onMouseLeaveLogo() {
    this.overTheLogo = false;
  }

  isOverTheLogo() {
    // return $event === this.overTheLogo;
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
