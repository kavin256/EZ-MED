import {Component, Inject, Input, OnInit} from '@angular/core';
import './header.component.css';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  doctorOrPatient = null;
  // firstName = 'Kavin';
  firstName = null;

  constructor(public dialog: MatDialog,
              private router: Router) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      modalType: 'SIGN_UP'
    };

    dialogConfig.disableClose = false;
    dialogConfig.width = '300px';

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      this.doctorOrPatient = result;
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
  }
}
