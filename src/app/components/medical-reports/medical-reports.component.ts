import { Component, OnInit } from '@angular/core';
import {Constants} from '../../utils/Constants';
import {HttpClient, HttpHeaderResponse, HttpRequest} from '@angular/common/http';
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
  appointmentId: number;
  uploadSuccessful: boolean;

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
  }
  /**
   * Upload files handling
   * @param event file
   */
  uploadImage(event) {
    this.selectedFile = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', this.selectedFile);

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
          }
        }
    );
  }

}
