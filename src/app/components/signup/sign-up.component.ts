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
import {MatDialogConfig, MatRadioChange} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();

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
      private dataStore: DataStoreService
  ) { }

  ngOnInit() {
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
            sessionStorage.setItem(SessionStorageKeys.loggedInUser, JSON.stringify(data.data[0]));
            if (data.data[0].doctor) {
              // location.reload();
              sessionStorage.setItem(SessionStorageKeys.userId, null);
              // todo: uncomment
              // sessionStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].doctorData.userName));
              sessionStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].userName));
              this.router.navigate(['doctor/dashboard']).then(r => {
                location.reload();
              });
            } else if (!data.data[0].doctor) {
              // location.reload();
              sessionStorage.setItem(SessionStorageKeys.userId, null);
              // todo: uncomment
              // sessionStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].patientData.userName));
              sessionStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].userName));
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

  validateInput(): boolean {
    return false;
  }

  SignUp() {
    if ( this.validateInput() ) {
      this.isIncompleteErrorAvailable = true;
    } else {
      this.isIncompleteErrorAvailable = false;

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
      userObj.doctor = this.logInType === 'doctor';
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
    this.dataLoaderService.activateLoader(true, MODAL_TYPES.LOADING);
    setTimeout(() => { this.dataLoaderService.activateLoader(false, MODAL_TYPES.LOADING); }, 1000);
    // todo: location.reload(); to update the header
  }
}
