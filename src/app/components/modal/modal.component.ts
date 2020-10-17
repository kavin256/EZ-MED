import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Constants} from '../../utils/Constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalType = 'SIGN_UP';
  signUpResultObject = {
    isSignUp: undefined,
    userType: undefined
  };
  modalTypes: Constants = new Constants();
  isSignUp = null;

  constructor(
      public dialogRef: MatDialogRef<ModalComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
    this.modalType = data.modalType;
  }

  ngOnInit() {
  }

  signIn(): void {
    this.isSignUp = false;
    this.signUpResultObject.isSignUp =  this.isSignUp;
    this.dialogRef.close(this.signUpResultObject);
  }

  signUp(): void {
    this.isSignUp = true;
  }

  doctorSignUp(): void {
    this.signUpResultObject.isSignUp =  this.isSignUp;
    this.signUpResultObject.userType =  'doctor';
    this.dialogRef.close(this.signUpResultObject);
  }

  patientSignUp(): void {
    this.signUpResultObject.isSignUp =  this.isSignUp;
    this.signUpResultObject.userType =  'patient';
    this.dialogRef.close(this.signUpResultObject);
  }
}
