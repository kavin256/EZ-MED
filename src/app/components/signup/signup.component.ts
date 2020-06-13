import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import './signup.component.css';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();
  hide = true;
  // logInType = 'doctor';
  logInType = 'patient';
  name: string;
  email: string;
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

  constructor() { }

  ngOnInit() {
  }
}
