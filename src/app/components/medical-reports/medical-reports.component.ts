import { Component, OnInit } from '@angular/core';
import {Constants} from '../../utils/Constants';
import {HttpClient, HttpHeaderResponse, HttpRequest, HttpResponse} from '@angular/common/http';
import {Subscription} from 'rxjs-compat/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-medical-reports',
  templateUrl: './medical-reports.component.html',
  styleUrls: ['./medical-reports.component.css']
})
export class MedicalReportsComponent implements OnInit {
  selectedFile: File;
  sub = new Subscription();
  fileName = '';
  appointmentId: number;
  uploadSuccessful: boolean;
  uploadingInProgress: boolean;
  addItem: boolean;
  objectListing: any;
  profileImageURL = Constants.API_BASE_URL + Constants.MEDICAL_REPORT_DOC_DOWNLOAD;

  constructor(
      public route: ActivatedRoute,
      public https: HttpClient
  ) { }

  ngOnInit() {
    this.sub = this.route
        .queryParams
        .subscribe(params => {
          this.appointmentId = +params.appointmentId;
        });
    this.setFiles();
  }


  /**
   * Set files
   */
  setFiles() {
    this.profileImageURL += this.appointmentId;

    // get file and verify that it is in the storage
    const req = new HttpRequest('GET', this.profileImageURL, {
      reportProgress: true
    });

    this.https.request(req).subscribe(
        data => {
          if ((data instanceof HttpResponse) && data.status === 200) {
            this.objectListing = data.body;

            // removing the prefix
            const prefixLength = this.objectListing.prefix.length;
            const appointmentNumberLength = this.appointmentId.toString().length;
            this.objectListing.objectSummaries.forEach((objectSummary) => {
              objectSummary.keyName = objectSummary.key.slice(prefixLength + appointmentNumberLength + 1);
            });

          }
        },
        error => {
          if (error.status !== 200) {
            this.profileImageURL = './assets/img/profile_blue1.png';
          }
        });
  }

  /**
   * Upload files handling
   * @param event file
   */
  uploadImage(event) {
    this.selectedFile = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', this.selectedFile);
    this.uploadingInProgress = true;
    this.uploadSuccessful = false;
    this.addItem = false;
    // send request
    const url = Constants.API_BASE_URL + Constants.MEDICAL_REPORT_DOC_UPLOAD + this.appointmentId;
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    this.https.request(req).subscribe(
        data => {
          if (data && data instanceof HttpHeaderResponse && data.status === 200) {
            this.uploadSuccessful = true;
            this.uploadingInProgress = false;
            this.setFiles();
          }
        }
    );
  }

  addMoreItem() {
    this.addItem = true;
    this.uploadSuccessful = false;
    this.uploadingInProgress = false;
  }

  cancelAddingItem() {
    this.addItem = false;
    this.uploadSuccessful = false;
    this.uploadingInProgress = false;
  }

  /**
   * delete file
   * @param i index
   */
  removeItem(i: number) {
    const key = this.objectListing.objectSummaries[i].key;

    // send request
    const url = Constants.API_BASE_URL + Constants.MEDICAL_REPORT_DOC_DELETE + key;
    const req = new HttpRequest('DELETE', url, null, {
      reportProgress: true,
      responseType: 'json'
    });
    this.https.request(req).subscribe(
        data => {
          if (data && data instanceof HttpHeaderResponse && data.status === 200) {
            this.setFiles();
          }
        }
    );
  }
}
