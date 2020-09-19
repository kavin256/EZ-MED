import {Component, Inject, OnInit} from '@angular/core';
import './header.component.css';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../landing-page/landing-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
//
// /**
//  * @title Dialog Overview
//  */
// @Component({
//   selector: 'dialog-overview-example',
//   templateUrl: 'dialog-overview-example.html',
// })
// export class DialogOverviewExample {
//
//   animal: string;
//   name: string;
//
//   constructor(public dialog: MatDialog) {}
//
//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: {name: this.name, animal: this.animal}
//     });
//
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }
//
// }

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  isSignUp = null;
  doctorOrPatient = null;

  constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  signIn(): void {
    this.dialogRef.close();
  }
  signUp(): void {
    this.isSignUp = true;
    // this.dialogRef.close();
  }
  doctorSignUp(): void {
    this.doctorOrPatient = 'doctor';
    this.dialogRef.close();
    // return '/signup';
  }
  patientSignUp(): void {
    this.doctorOrPatient = 'patient';
    this.dialogRef.close();
  }

}

