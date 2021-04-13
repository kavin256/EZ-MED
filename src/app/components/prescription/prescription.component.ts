import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserData} from '../../models/user-data';
import {Prescription} from '../../models/prescription';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Constants} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';
import {LocalStorageKeys, PrescriptionStatus} from '../../services/data-store.service';
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
  prescribedItems = [
      {
          title: '',
          take: ''
      }
  ];
  prescribedNoteItems = [
      {
          description: ''
      }
  ];
  appointment: AppointmentData;
  isNewPrescription = true;
  loggedInUser: UserData = null;
  doctorSide = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) {
    this.prescription = new Prescription();
    this.prescription.description = '';
  }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser)), this.router);
    if (sessionStorage.getItem(LocalStorageKeys.loggedInUser)) {
        this.loggedInUser = JSON.parse(sessionStorage.getItem(LocalStorageKeys.loggedInUser));
        this.doctorSide = this.loggedInUser.doctor;
        this.isNewPrescription = !this.doctorSide;
    }
    this.prescription.description = '';
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
              this.prescription.issuedDate = new Date(this.prescription.issuedDate);
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

    cancelPrescription() {
        const prescription = new Prescription();
        prescription.status = PrescriptionStatus.cancelled;
        prescription.id = this.prescriptionId;

        // create url and send request
        const url = Constants.API_BASE_URL + Constants.CANCEL_PRESCRIPTION;
        this.dataLoaderService.put<Prescription>(url, new HttpParams(), new HttpHeaders(), null, prescription )
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
