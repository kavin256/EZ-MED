import { Component, OnInit } from '@angular/core';
import {LocalStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UserData} from '../../models/user-data';
import {Constants} from '../../utils/Constants';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Prescription} from '../../models/prescription';
import {DataLoaderService} from '../../services/data-loader.service';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

    prescriptionList: Prescription [];
    loggedInUser: UserData = null;
    appointmentId: number;
    doctorSide: boolean;
    sub = new Subscription();

    constructor(
      public router: Router,
      public dataLoaderService: DataLoaderService,
      public route: ActivatedRoute,
      public dataHandlerService: DataHandlerService
    ) { }

    ngOnInit() {
      this.loadPrescriptionList();
      if (sessionStorage.getItem(LocalStorageKeys.loggedInUser)) {
          this.loggedInUser = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));
          this.doctorSide = this.loggedInUser.doctor;
      }
      // if not logged In this page should not be able to access
      this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);
    }

    loadPrescriptionList() {
        this.sub = this.route
            .queryParams
            .subscribe(params => {
                this.appointmentId = +params.appointmentId;
            });

        if (!isNaN(this.appointmentId) && this.appointmentId > 0) {
            // create url and send request
            const url = Constants.API_BASE_URL + Constants.LOAD_PRESCRIPTION_LIST + this.appointmentId;
            const httpParams = new HttpParams();
            this.dataLoaderService.get<Prescription>(url, httpParams, new HttpHeaders())
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1) {
                        this.prescriptionList = data.data[0];
                    } else if (data && data.status && data.status.code === -1) {
                        alert('Something is not right. Please check your internet connection!');
                    }
                });
        }
    }

    selectPrescription(prescriptionId: any) {
      this.router.navigate(['appointment/prescription'],
          { queryParams: { appointmentId: this.appointmentId, prescriptionId } }).then(r => {});
    }

    addPrescription() {
      this.router.navigate(['appointment/prescription'], { queryParams: { appointmentId: this.appointmentId } }).then(r => {});
    }

    goToMyAppointments() {
        this.router.navigate(['appointment'], { queryParams: { id: this.appointmentId } }).then(r => {});
    }

}
