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
  constants: Constants = new Constants();

  encryptionKey = 'ezmed';
  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();
  hide = true;
  logInType = 'doctor';
  //logInType = 'patient';
  name: string;
  email: string;
  isSignUp = true;
  title: any;
  birthday: any;
  skypeId: any;
  contact: any;
  pass: any;
  conPass: any;
  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'}
  ];

  constructor(
      private dataLoaderService: DataLoaderService,
  ) { }

  ngOnInit() {
    //console.log(this.encryptPassword('milinda'));
  }

  registerNewUser(user: UserData) {
    user.password = this.encryptPassword(user.password);
    // create url and send request
    const url = this.constants.BASE_URL + this.constants.CREATE_NEW_USER;
    this.dataLoaderService.post<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.createdUser, user );
  }

  encryptPassword(password: string): string {
    password =  CryptoJS.AES.encrypt(password, this.encryptionKey).toString();
    //console.log(CryptoJS.AES.decrypt(password, this.encryptionKey).toString(CryptoJS.enc.Utf8));
    return password;
  }
}
