import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import './sign-up.component.css';
import * as CryptoJS from 'crypto-js';
import {UserData} from '../../models/user-data';
import {Constants} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';
import {AuthResponse} from '../../models/auth-response';
import {RequestOptions} from '../../models/request-options';
import {DataKey} from '../../services/data-store.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();


  encryptionKey = 'ezmed';
  hide = true;
  logInType = 'doctor';
  // logInType = 'patient';
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

  constructor(
      private dataLoaderService: DataLoaderService,
  ) { }

  ngOnInit() {
    // console.log(this.encryptPassword('milinda'));
  }

  registerNewUser(user: UserData) {
    user.password = this.encryptPassword(user.password);
    // create url and send request
    const url = Constants.BASE_URL + Constants.CREATE_NEW_USER;
    this.dataLoaderService.post<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.createdUser, user );
  }

  encryptPassword(password: string): string {
    password =  CryptoJS.AES.encrypt(password, this.encryptionKey).toString();
    // console.log(CryptoJS.AES.decrypt(password, this.encryptionKey).toString(CryptoJS.enc.Utf8));
    return password;
  }

  validateInput(): boolean {
    return true;
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
}
