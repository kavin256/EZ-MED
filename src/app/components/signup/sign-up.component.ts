import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import './sign-up.component.css';
import * as CryptoJS from 'crypto-js';
import {UserData} from '../../models/user-data';
import {Constants, DoctorTitles, MODAL_TYPES} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';
import {AuthResponse} from '../../models/auth-response';
import {RequestOptions} from '../../models/request-options';
import {DataKey, DataStoreService, SessionStorageKeys} from '../../services/data-store.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatRadioChange} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {DataHandlerService} from '../../services/data-handler.service';
import {AuthModel} from '../../models/auth-model';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();
  titleFormControl = new FormControl('');
  firstNameFormControl = new FormControl('');
  lastNameFormControl = new FormControl('');
  emailFormControl = new FormControl('');
  genderFormControl = new FormControl('');
  bDayFormControl = new FormControl('');
  whatsAppNumberFormControl = new FormControl('');
  contactNumberFormControl = new FormControl('');
  passFormControl = new FormControl('');
  conPassFormControl = new FormControl('');

  isDoctor = false;
  encryptionKey = 'ezmed';
  hide = true;
  // logInType = 'doctor';
  logInType = 'patient';
  firstName: string;
  lastName: string;
  email: string;
  isSignUp = true;
  title: any;
  birthday: any;
  contactNumber: any;
  whatsAppNumber: any;
  pass: any;
  conPass: any;
  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  isMale = true;
  knownAllergies: any;
  isIncompleteErrorAvailable = false;
  passwordMissMatch = false;
  signUpResultObject = {
    isSignUp: undefined,
    userType: undefined
  };
  titles = [
    {value: DoctorTitles.DR},
    {value: DoctorTitles.MR},
    {value: DoctorTitles.MRS},
    {value: DoctorTitles.MS},
    {value: DoctorTitles.PROF},
  ];

  constructor(
      public dialog: MatDialog,
      private router: Router,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectFromSignUpIfLoggedIn(JSON.parse(localStorage.getItem(SessionStorageKeys.loggedInUser)));
    // this.resetFields();

    // if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
    //   this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
    //   this.logInType = this.signUpResultObject.userType;
    // }

    // console.log(this.encryptPassword('milinda'));
  }

  registerNewUser(user: UserData) {
    user.password = this.encryptPassword(user.password);
    // create url and send request
    const url = Constants.BASE_URL + Constants.CREATE_NEW_USER;
    this.dataLoaderService.post<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.createdUser, user )
        .then((data: any) => {
          if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
            localStorage.setItem(SessionStorageKeys.loggedInUser, JSON.stringify(data.data[0]));
            if (data.data[0].doctor) {
              // location.reload();
              localStorage.setItem(SessionStorageKeys.userId, null);
              // todo: uncomment
              // localStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].doctorData.userName));
              localStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].userName));
              this.router.navigate(['doctor/dashboard']).then(r => {
                location.reload();
              });
            } else if (!data.data[0].doctor) {
              // location.reload();
              localStorage.setItem(SessionStorageKeys.userId, null);
              // todo: uncomment
              // localStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].patientData.userName));
              localStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].userName));
              this.router.navigate(['user/dashboard']).then(r => {
                location.reload();
              });
            }
          } else if (data && data.status && data.status.code === -1) {
            alert('Something went wrong. Please contact support !!');
          }
        });
  }

  encryptPassword(password: string): string {
    password =  CryptoJS.AES.encrypt(password, this.encryptionKey).toString();
    // console.log(CryptoJS.AES.decrypt(password, this.encryptionKey).toString(CryptoJS.enc.Utf8));
    return password;
  }

  validateInput(isDoctor: boolean): boolean {
    this.titleFormControl.markAsTouched();
    this.firstNameFormControl.markAsTouched();
    this.lastNameFormControl.markAsTouched();
    this.emailFormControl.markAsTouched();
    this.genderFormControl.markAsTouched();
    this.bDayFormControl.markAsTouched();
    this.whatsAppNumberFormControl.markAsTouched();
    this.contactNumberFormControl.markAsTouched();
    this.passFormControl.markAsTouched();
    this.conPassFormControl.markAsTouched();

    if (isDoctor) {
      return !this.titleFormControl.invalid &&
          !this.firstNameFormControl.invalid &&
          !this.lastNameFormControl.invalid &&
          !this.emailFormControl.invalid &&
          !this.genderFormControl.invalid &&
          !this.whatsAppNumberFormControl.invalid &&
          !this.contactNumberFormControl.invalid &&
          !this.passFormControl.invalid &&
          !this.conPassFormControl.invalid;
    } else {
      return !this.titleFormControl.invalid &&
          !this.firstNameFormControl.invalid &&
          !this.lastNameFormControl.invalid &&
          !this.emailFormControl.invalid &&
          !this.genderFormControl.invalid &&
          !this.bDayFormControl.invalid &&
          !this.whatsAppNumberFormControl.invalid &&
          !this.contactNumberFormControl.invalid &&
          !this.passFormControl.invalid &&
          !this.conPassFormControl.invalid;
    }
  }

  SignUp() {
    this.passwordMissMatch = false;
    this.isIncompleteErrorAvailable = false;
    if ( !this.validateInput(this.isDoctor) ) {
      window.scroll(0, 0);
      this.isIncompleteErrorAvailable = true;
    } else if (!this.pass || !this.conPass || this.pass !==  this.conPass) {
      this.passwordMissMatch = true;
      this.pass = null;
      this.conPass = null;
    } else {
      const userObj = new UserData();
      userObj.userName = this.email;
      userObj.password = this.pass;
      userObj.firstName = this.firstName;
      userObj.lastName = this.lastName;
      userObj.title = this.title;
      userObj.isMale = this.isMale;
      userObj.birthday = this.birthday;
      userObj.contactNumber = this.contactNumber;
      userObj.whatsAppNumber = this.whatsAppNumber;
      userObj.doctor = this.isDoctor;
      userObj.userAllergies = this.knownAllergies;

      this.registerNewUser(userObj);
    }
  }

  setGender(value: any) {
    switch (value) {
      case 'female': {
        this.isMale = false;
        break;
      }
      case 'male': {
        this.isMale = true;
        break;
      }
    }
  }

  setIsDoctor($event: MatRadioChange) {
    this.isDoctor = JSON.parse($event.value);
    this.resetFields();
  }

  private resetFields() {
    this.birthday = null;
    this.pass = null;
    this.conPass = null;
    this.knownAllergies = '';
    this.isIncompleteErrorAvailable = false;
  }

  logIn() {
    this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING, true);
    // setTimeout(() => {  }, 1000);

    // create url and send request
    const url = Constants.BASE_URL + Constants.AUTHENTICATE;
    const obj: AuthModel = new AuthModel();
    // obj.username = this.email;
    obj.username = 'foo12345';
    // obj.password = this.pass;
    obj.password = 'foo';
    this.dataLoaderService.login<AuthResponse>(url, new RequestOptions(), obj, DataKey.authKey)
        .then((data: any) => {
          if (data && data.jwt) {
            localStorage.setItem(Constants.EZMED_AUTH, data.jwt);
            if (this.dataHandlerService.loadUserData(this.email, this.dataLoaderService)) {
              const user = JSON.parse(localStorage.getItem(SessionStorageKeys.loggedInUser));
              if (user && user.doctor) {
                this.router.navigate(['doctor/dashboard']).then(r => {
                  location.reload();
                });
              } else if (user && !user.doctor) {
                this.router.navigate(['user/dashboard']).then(r => {
                  location.reload();
                });
              }
            }
          } else {
            alert('Something went wrong. Please contact support !!');
          }
          this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING);
        });
    // todo: location.reload(); to update the header
  }
}
