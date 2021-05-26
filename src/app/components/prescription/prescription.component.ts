import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs-compat/Subscription';
import {UserData} from '../../models/user-data';
import {Prescription} from '../../models/prescription';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {Constants} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';
import {SessionStorageKeys, PrescriptionStatus} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentData} from '../../models/appointment-data';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})

export class PrescriptionComponent implements OnInit {
  @ViewChild('test', {static: true}) el: ElementRef;

  sub = new Subscription();
  prescriptionId: number;
  appointmentId: number;
  patient: UserData;
  doctor: UserData;
  items = [
      'Augmentine 625mg bd - 5 days',
      'Omeprazole 20mg bd - 5 days',
      'Fexofenadine 180mg 1 night - 5 days'
  ];

  isConfirmationActive: boolean;
  ngbAlertVisible = true;
  prescription: Prescription;
  prescribedItems = [];
  prescribedNoteItems = [];
  appointment: AppointmentData;
  isNewPrescription = true;
  loggedInUser: UserData = null;
  doctorSide = false;
  contactPhone: string;
  contactEmail: string;
  signatureImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_SIGN;

  constructor(
      public route: ActivatedRoute,
      public router: Router,
      public https: HttpClient,
      public dataLoaderService: DataLoaderService,
      public dataHandlerService: DataHandlerService
  ) {
    this.prescription = new Prescription();
    this.prescription.description = '';
  }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser)), this.router);
    if (sessionStorage.getItem(SessionStorageKeys.loggedInUser)) {
        this.loggedInUser = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));
        this.doctorSide = this.loggedInUser.doctor;
        this.isNewPrescription = !this.doctorSide;
    }
    this.prescription.description = '';
    this.contactPhone = this.dataHandlerService.loadConfig('EZMED_CONTACT_PHONE');
    this.contactEmail = this.dataHandlerService.loadConfig('EZMED_CONTACT_EMAIL');
    this.loadPrescription();
  }

  copyToClipBoard() {
    const copyText = document.getElementById('skypeId');
    // @ts-ignore
    copyText.select();
    document.execCommand('copy');
    // @ts-ignore
    alert('Copied the text: ' + copyText.value);
  }

  public SavePDF(): void {
    // var pdf = new jsPDF('p','pt','a4');
    // pdf.html2pdf(document.getElementById('pdfTable'), function() {
    //   pdf.save('pdfTable.pdf');
    // });
  }

  loadPrescription() {
    this.sub = this.route
        .queryParams
        .subscribe(params => {
          this.prescriptionId = +params.prescriptionId;
          this.appointmentId = +params.appointmentId;
        });

    if (!isNaN(this.prescriptionId) && this.prescriptionId > 0) {
      this.isNewPrescription = false;
      // create url and send request
      const url = Constants.API_BASE_URL + Constants.LOAD_PRESCRIPTION + this.prescriptionId;
      const httpParams = new HttpParams();
      this.dataLoaderService.get<Prescription>(url, httpParams, new HttpHeaders())
          .then((data: any) => {
            if (data && data.status && data.status.code === 1) {
              this.prescription = data.data[0];
              this.prescribedItems = this.prescription.prescribedItems;
              this.prescribedNoteItems = this.prescription.prescribedNoteItems;
              this.prescription.issuedDate = new Date(this.prescription.issuedDate);
              this.setSignImageSource(this.prescription.lightDoctor.userId);
            } else if (data && data.status && data.status.code === -1) {
              alert('Something is not right. Please check your internet connection!');
            }
          });
    } else {
      this.prescription = new Prescription();
      this.isNewPrescription = true;
      this.loadAppointment();
    }
  }

  loadAppointment() {
    this.dataHandlerService.loadUserAppointmentById(this.appointmentId, this.dataLoaderService)
        .then((data: AppointmentData) => {
          this.appointment = data;

          // set up init values
          this.prescription.lightPatient = this.appointment.patientData;
          this.prescription.lightDoctor = this.appointment.doctorData;
          this.prescription.description = '';
        }).catch((e) => {
      console.log(e);
    }).finally(() => {});
  }

  goToPrescriptionList() {
      this.router.navigate(['appointment/prescriptionList'], { queryParams: { appointmentId: this.appointmentId } }).then(r => {});
  }

  savePrescription() {
    const prescription = new Prescription();
    prescription.prescribedItems = this.prescribedItems;
    prescription.prescribedNoteItems = this.prescribedNoteItems;
    // prescription.description = this.prescription.description;
    prescription.description = 'this is a test description';
    prescription.status = PrescriptionStatus.active;
    prescription.bookingId = this.appointmentId;
    prescription.patientId = this.prescription.lightPatient.userId;
    prescription.professionalId = this.prescription.lightDoctor.userId;

    // create url and send request
    const url = Constants.API_BASE_URL + Constants.ADD_PRESCRIPTION;
    this.dataLoaderService.post<Prescription>(url, new HttpParams(), new HttpHeaders(), null, prescription )
      .then((data: any) => {
          if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
              this.goToPrescriptionList();
          } else if (data && data.status && data.status.code === -1) {
              alert('Something went wrong. Please contact support !!');
          }
      });
  }

    /**
     * Set signature image source. If there is no image, make the URL empty
     */
    setSignImageSource(doctorId: string) {
        this.signatureImageURL += doctorId;
        // this.signatureImageURL += '100001';
        // get image and verify that it is in the storage
        const req = new HttpRequest('GET', this.signatureImageURL, {
            reportProgress: true
        });
        this.https.request(req).subscribe(
            data => {},
            error => {
                if (error.status !== 200) {
                    // this.signatureImageURL = './assets/img/signature_doc.png';
                    this.signatureImageURL = '';
                }
            });
    }

    cancelPrescription() {
        const prescription = new Prescription();
        prescription.status = PrescriptionStatus.cancelled;
        prescription.id = this.prescriptionId;

        // create url and send request
        const url = Constants.API_BASE_URL + Constants.SET_PRESCRIPTION_STATUS + this.prescriptionId + '/' + PrescriptionStatus.cancelled;
        this.dataLoaderService.put<Prescription>(url, new HttpParams(), new HttpHeaders(), null, null )
            .then((data: any) => {
                if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                    this.goToPrescriptionList();
                } else if (data && data.status && data.status.code === -1) {
                    alert('Something went wrong. Please check your internet connection !!');
                }
            }).catch((e) => {
            alert('Something went wrong. Please check your internet connection !!');
        });
    }

    addMoreItem() {
        const newItem = {
            title: '',
            take: ''
        };
        this.prescribedItems.push(newItem);
    }

    addMoreNoteItem() {
        const newNoteItem = {
            description: ''
        };
        this.prescribedNoteItems.push(newNoteItem);
    }

    removeItem(i: number) {
        if (i > -1) {
            this.prescribedItems.splice(i, 1);
        }
    }

    removeNoteItem(i: number) {
        if (i > -1) {
            this.prescribedNoteItems.splice(i, 1);
        }
    }
}
