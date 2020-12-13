import {Component, Inject, Input, OnInit} from '@angular/core';
import './header.component.css';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ModalComponent} from '../modal/modal.component';
import {MODAL_TYPES} from '../../utils/Constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  user = null;
  // firstName = 'Kavin';
  firstName = null;
  // typeOfUser;
  typeOfUser = 'Doctor';
  // typeOfUser = 'Patient';

  constructor(public dialog: MatDialog,
              private router: Router) {}

  ngOnInit() {}

  logoClick(): void {
    if (!this.typeOfUser) {
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
          if (!result.isSignUp) {
            this.firstName = 'Kavin';
          }
          console.log(result.isSignUp);
          console.log(result.userType);
          this.router.navigate(['signup']).then(r => {
          });
        }
      });
    } else if (this.typeOfUser === 'Doctor') {
      this.router.navigate(['doctor/dashboard']).then(r => {
      });
    } else if (this.typeOfUser === 'Patient') {
      this.router.navigate(['user/dashboard']).then(r => {
      });
    }
  }

  goToHomePage() {
    this.router.navigate(['/']).then(r => {
    });
  }
}
