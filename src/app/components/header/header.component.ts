import {Component, Inject, Input, OnInit} from '@angular/core';
import './header.component.css';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ModalComponent} from '../modal/modal.component';
import {MODAL_TYPES} from '../../utils/Constants';
import {DataKey, DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  signUpResultObject = {
    isSignUp: undefined,
    userType: undefined
  };
  loggedInUser = null;
  user = null;
  firstName = null;
  isSignUp = true;

  //
  // firstName = 'Kavin';
  // userType = 'Doctor';

  // //
  // firstName = 'Kavin';
  // userType = 'Patient';

  // //
  userType;

  constructor(public dialog: MatDialog,
              private router: Router,
              private dataStore: DataStoreService
  ) {}

  ngOnInit() {
    if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
      this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
      this.userType = this.signUpResultObject.userType;
      this.isSignUp = this.signUpResultObject.isSignUp;
    }
  }

  logoClick(): void {
    if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
      this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
      this.userType = this.signUpResultObject.userType;
      this.isSignUp = this.signUpResultObject.isSignUp;
    }
    this.loggedInUser = this.dataStore.get(DataKey.loggedUser).getValue();
    if (this.loggedInUser && this.loggedInUser.doctor !== null && this.loggedInUser.doctor) {
      this.router.navigate(['doctor/dashboard']).then(r => {
      });
    } else if (this.loggedInUser && this.loggedInUser.doctor !== null && !this.loggedInUser.doctor) {
      this.router.navigate(['user/dashboard']).then(r => {
      });
    } else {
      if (!(this.signUpResultObject && this.signUpResultObject.userType)) {
        this.goToHomePage();
        const dialogConfig = new MatDialogConfig();

        dialogConfig.data = {
          modalType: MODAL_TYPES.SIGN_UP
        };

        dialogConfig.disableClose = false;
        dialogConfig.width = '300px';

        const dialogRef = this.dialog.open(ModalComponent, dialogConfig
        );

        dialogRef.afterClosed().subscribe(result => {
          this.user = result;
          if (result) {
            // if (!result.isSignUp) {
            //   this.firstName = 'Kavin';
            // }
            this.dataStore.set(DataKey.signUpResultObject, result);
            this.router.navigate(['signup']).then(r => {
            });
          }
        });
      } else if (this.userType && this.userType.toLowerCase() === 'Doctor'.toLowerCase()) {
        this.router.navigate(['doctor/dashboard']).then(r => {
        });
      } else if (this.userType && this.userType.toLowerCase() === 'Patient'.toLowerCase()) {
        this.router.navigate(['user/dashboard']).then(r => {
        });
      }
    }
  }

  goToHomePage() {
    this.router.navigate(['/']).then(r => {
    });
  }
}
