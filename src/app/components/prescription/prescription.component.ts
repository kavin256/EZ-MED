import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {APPOINTMENT_STATUS, DoctorType} from '../../utils/Constants';
import {Subscription} from 'rxjs';
import jsPDF from 'jspdf';
import {UserData} from '../../models/user-data';
import {Prescription} from '../../models/prescription';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Constants} from '../../utils/Constants';
import html2canvas from 'html2canvas';
import {DataLoaderService} from '../../services/data-loader.service';
import {$} from 'protractor';
import {DataKey, LocalStorageKeys, PrescriptionStatus} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentData} from '../../models/appointment-data';
import * as moment from 'moment';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})

export class PrescriptionComponent implements OnInit {
  @ViewChild('test', {static: true}) el: ElementRef;

  sub = new Subscription();
  currentDate = new Date();
  prescriptionStatus: PrescriptionStatus;
  prescriptionId: number;
  appointmentId: number;
  patient: UserData;
  doctor: UserData;
  //
  // booking = {
  //   bookingId: 2387,
  //   doctorId: '4352545235',
  //   patientId: '76531',
  //   doctorName: 'Dr. Tim Cook',
  //   patientTitle: 'Mr',
  //   patientAge: 29,
  //   patientName: 'John Doe',
  //   skypeID: 'kafkjnf34',
  //   phoneNumber: '0773092511',
  //   bookingStatus: APPOINTMENT_STATUS.BOOKED,
  //   messageThread: [
  //     {
  //       sender: 'patient',
  //       message: 'Hi doctor, I have a headache and a cough.'
  //     },
  //     {
  //       sender: 'doctor',
  //       message: 'Hi John, do you have any allergies?'
  //     },
  //     {
  //       sender: 'patient',
  //       message: 'I\'m allergic to panadol'
  //     },
  //     {
  //       sender: 'doctor',
  //       message: 'Thanks.'
  //     },
  //     {
  //       sender: 'patient',
  //       message: 'THANK YOU DOC!.'
  //     },
  //     {
  //       sender: 'patient',
  //       message: 'Can you send me a prescription btw?'
  //     },
  //     {
  //       sender: 'doctor',
  //       message: 'Sure. I will send you.'
  //     },
  //     {
  //       sender: 'patient',
  //       message: 'Awesome. Thanks'
  //     }
  //   ],
  //   bookingPrice: 'Rs. 2000.00',
  //   doctorCharge: 'Rs. 1800.00'
  // };

  items = [
      'Augmentine 625mg bd - 5 days',
      'Omeprazole 20mg bd - 5 days',
      'Fexofenadine 180mg 1 night - 5 days'
  ];

  ngbAlertVisible = true;
  prescription: Prescription;
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

  previewToggle($event: string) {
      if ($event === 'preview') {
        this.isNewPrescription = true;
      } else {
        this.isNewPrescription = false;
      }
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

  goToAppointmentList() {
      this.router.navigate(['appointment/prescriptionList'], { queryParams: { appointmentId: this.appointmentId } }).then(r => {});
  }

  savePrescription() {
    const prescription = new Prescription();
    prescription.description = this.prescription.description;
    prescription.status = PrescriptionStatus.active;
    prescription.bookingId = this.appointmentId;
    prescription.patientId = this.prescription.lightPatient.userId;
    prescription.professionalId = this.prescription.lightDoctor.userId;

    // create url and send request
    const url = Constants.API_BASE_URL + Constants.ADD_PRESCRIPTION;
    this.dataLoaderService.post<Prescription>(url, new HttpParams(), new HttpHeaders(), null, prescription )
      .then((data: any) => {
          if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
              console.log('Prescription successfully saved');
              this.goToAppointmentList();
          } else if (data && data.status && data.status.code === -1) {
              alert('Something went wrong. Please contact support !!');
          }
      });
  }
}
