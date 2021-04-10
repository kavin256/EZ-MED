import { Component, OnInit } from '@angular/core';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  isDoctor: boolean;
  prescriptionList: any [];
  prescriptionId: number;
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
          this.prescriptionId = +params.id;
          // load Appointment by ID;
      });
      // if not logged In this page should not be able to access
      this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);
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
      this.router.navigate(['appointment/prescription'], { queryParams: { id: this.prescriptionId } }).then(r => {});

    }
}
