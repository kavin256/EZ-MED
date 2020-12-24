import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  isDoctor: boolean;
  prescriptionList: any [];

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
    this.isDoctor = true;
    // this.isDoctor = false;

    this.prescriptionList = new Array<any>()
    this.prescriptionList.push(
        {
          appointmentNumber: 356,
          prescriptionTimeStamp: new Date(2020, 3, 2, 9, 45)
        }
    );
    this.prescriptionList.push(
        {
          appointmentNumber: 423,
          prescriptionTimeStamp: new Date(2020, 3, 2, 10, 30)
        }
    );
    this.prescriptionList.push(
        {
          appointmentNumber: 987,
          prescriptionTimeStamp: new Date(2020, 3, 2, 11, 20)
        }
    );
  }

    selectPrescription() {
      this.router.navigate(['appointment/prescription']).then(r => {
      });
    }
}
