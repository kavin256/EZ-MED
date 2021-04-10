import { Component, OnInit } from '@angular/core';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UserData} from '../../models/user-data';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  prescriptionList: any [];
    loggedInUser: UserData = null;
    appointmentId: number;
    doctorSide: boolean;
  sub = new Subscription();

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
      this.sub = this.route
      .queryParams
      .subscribe(params => {
          // Defaults to 0 if no query param provided.
          this.appointmentId = +params.appointmentId;
          // load Appointment list by ID;
      });
      if (sessionStorage.getItem(LocalStorageKeys.loggedInUser)) {
          this.loggedInUser = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));
          this.doctorSide = this.loggedInUser.doctor;
      }
      // if not logged In this page should not be able to access
      this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);

      this.prescriptionList = new Array<any>();
      this.prescriptionList.push(
            {
                prescriptionId: 1,
                prescriptionTimeStamp: new Date(2020, 3, 2, 9, 45)
            }
        );
      this.prescriptionList.push(
            {
                prescriptionId: 2,
                prescriptionTimeStamp: new Date(2020, 3, 2, 10, 30)
            }
        );
      this.prescriptionList.push(
            {
                prescriptionId: 3,
                prescriptionTimeStamp: new Date(2020, 3, 2, 11, 20)
            }
        );
  }

    selectPrescription(prescriptionId: any) {
      this.router.navigate(['appointment/prescription'],
          { queryParams: { appointmentId: this.appointmentId, prescriptionId } }).then(r => {});
    }
    addPrescription() {
      this.router.navigate(['appointment/prescription'], { queryParams: { appointmentId: this.appointmentId } }).then(r => {});
    }
}
