import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import './sign-up.component.css';
import * as CryptoJS from 'crypto-js';
import {UserData} from '../../models/user-data';
import {Constants, MODAL_TYPES, PatientTitles} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';
import {AuthResponse} from '../../models/auth-response';
import {RequestOptions} from '../../models/request-options';
import {DataKey, LocalStorageKeys} from '../../services/data-store.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {DataHandlerService} from '../../services/data-handler.service';
import {AuthModel} from '../../models/auth-model';
import {DatePipe} from '@angular/common';
import {MatRadioChange} from '@angular/material/radio';
import {DataEncryptionService} from '../../services/data-encryption.service';

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
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
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
  male = true;
  knownAllergies: any;
  isIncompleteErrorAvailable = false;
  passwordMissMatch = false;
  titles = PatientTitles;

  constructor(
      private dataEncryptionService: DataEncryptionService,
      private router: Router,
      private datePipe: DatePipe,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectFromSignUpIfLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
  }

  registerNewUser(user: UserData) {
    user.password = this.encryptPassword(user.password);
    user.birthday = this.datePipe.transform(this.bDayFormControl.value, 'yyyy-MM-dd');

    // create url and send request
    const url = Constants.API_BASE_URL + Constants.CREATE_NEW_USER;
    this.dataLoaderService.post<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.createdUser, user )
        .then((data: any) => {
          if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
            localStorage.setItem(LocalStorageKeys.loggedInUser, JSON.stringify(data.data[0]));
            if (data.data[0].doctor) {
              localStorage.setItem(LocalStorageKeys.userId, JSON.stringify(data.data[0].userId));
              this.router.navigate(['doctor/dashboard']).then(r => {
                location.reload();
              });
            } else if (!data.data[0].doctor) {
              localStorage.setItem(LocalStorageKeys.userId, JSON.stringify(data.data[0].userId));
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
      userObj.userId = this.userId;
      userObj.email = this.email;
      userObj.password = this.pass;
      userObj.firstName = this.firstName;
      userObj.lastName = this.lastName;
      userObj.title = this.title;
      userObj.male = this.male;
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
        this.male = false;
        break;
      }
      case 'male': {
        this.male = true;
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

    // create url and send request
    const url = Constants.API_BASE_URL + Constants.AUTHENTICATE;
    const obj: AuthModel = new AuthModel();

    const encrypted = this.dataEncryptionService.set('123456$#@$^@1ERF', this.pass);
    obj.userName = this.email;
    obj.password = encrypted;
    this.dataLoaderService.login<AuthResponse>(url, new RequestOptions(), obj, DataKey.authKey)
        .then((data: any) => {
          if (data && data.jwt) {
            localStorage.setItem(Constants.EZ_MED_AUTH, data.jwt);
            if (this.dataHandlerService.loadUserData(obj.userName, this.dataLoaderService)) {
              const user = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
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
  }
}
