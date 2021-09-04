import {Component, OnInit} from '@angular/core';
import {Constants} from '../../utils/Constants';
import {HttpClient, HttpHeaderResponse, HttpRequest, HttpResponse} from '@angular/common/http';
import {Subscription} from 'rxjs-compat/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionStorageKeys} from '../../services/data-store.service';
import {UserData} from '../../models/user-data';

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
    uploadingInProgress: boolean;
    editable: boolean;
    uploadingFailed: boolean;
    addItem: boolean;
    objectListing: any;
    doctorSide = false;
    fileListingURL = Constants.API_BASE_URL + Constants.MEDICAL_REPORT_DOC_LIST_DOWNLOAD;
    viewFileURL = Constants.API_BASE_URL + Constants.MEDICAL_REPORT_DOC_DOWNLOAD;
    loggedInUser: UserData = null;

    constructor(
        public route: ActivatedRoute,
        public https: HttpClient,
        public router: Router
    ) {
    }

    ngOnInit() {
        this.sub = this.route
            .queryParams
            .subscribe(params => {
                this.appointmentId = +params.appointmentId;
            });
        this.setFiles();
        this.setViewFile();

        // if not logged In this page should not be able to access
        if (sessionStorage.getItem(SessionStorageKeys.loggedInUser)) {
            this.loggedInUser = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));
            this.doctorSide = this.loggedInUser.doctor;
        }

        this.editable = sessionStorage.getItem(SessionStorageKeys.editable) === 'true';
    }


    /**
     * Set files
     */
    setFiles() {
        this.fileListingURL = Constants.API_BASE_URL + Constants.MEDICAL_REPORT_DOC_LIST_DOWNLOAD + this.appointmentId;

        // get file and verify that it is in the storage
        const req = new HttpRequest('GET', this.fileListingURL, {
            reportProgress: true
        });

        this.https.request(req).subscribe(
            data => {
                if ((data instanceof HttpResponse) && data.status === 200) {
                    this.objectListing = data.body;

                    // removing the prefix
                    const prefixLength = this.objectListing.prefix.length;
                    // const appointmentNumberLength = this.appointmentId.toString().length;
                    this.objectListing.objectSummaries.forEach((objectSummary) => {
                        objectSummary.keyName = objectSummary.key.slice(prefixLength + 1);
                    });

                }
            },
            error => {
                if (error.status !== 200) {
                }
            });
    }

    /**
     * Set view files
     */
    setViewFile() {
        this.viewFileURL = Constants.API_BASE_URL + Constants.MEDICAL_REPORT_DOC_DOWNLOAD + this.appointmentId;
    }

    download(url, filename) {
        fetch(url + '/' + filename).then((t) => {
            return t.blob().then((b) => {
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(b);
                    a.setAttribute('download', filename);
                    a.click();
                }
            );
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
        this.uploadingFailed = false;
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
                    this.uploadingFailed = false;
                    this.setFiles();
                    this.setViewFile();
                } else if (data && data instanceof HttpHeaderResponse && data.status !== 200) {
                    this.uploadSuccessful = false;
                    this.uploadingInProgress = false;
                    this.uploadingFailed = true;
                } else if (!this.uploadSuccessful) {
                    this.uploadingInProgress = true;
                    this.uploadingFailed = false;
                }
            }
        );
    }

    addMoreItem() {
        this.addItem = true;
        this.uploadSuccessful = false;
        this.uploadingInProgress = false;
        this.uploadingFailed = false;
    }

    cancelAddingItem() {
        this.addItem = false;
        this.uploadSuccessful = false;
        this.uploadingInProgress = false;
        this.uploadingFailed = false;
    }

    /**
     * delete file
     * @param i index
     */
    removeItem(i: number) {
        this.addItem = false;
        this.uploadSuccessful = false;
        this.uploadingInProgress = false;
        this.uploadingFailed = false;
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
                    this.setViewFile();
                }
            }
        );
    }

    goToMyAppointments() {
        this.router.navigate(['appointment'], {queryParams: {id: this.appointmentId}}).then(r => {
        });
    }
}
