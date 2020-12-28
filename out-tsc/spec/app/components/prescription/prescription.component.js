import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BookingStatus } from '../doctor-side-booking-list/doctor-side-booking-list.component';
import { DoctorType } from '../../utils/Constants';
import { LocalStorageKeys } from '../../services/data-store.service';
let PrescriptionComponent = class PrescriptionComponent {
    constructor(router, dataHandlerService) {
        this.router = router;
        this.dataHandlerService = dataHandlerService;
        this.currentDate = new Date();
        this.doctor = {
            id: 2,
            name: 'Dr. Punya Anupama',
            professionalType: DoctorType.GEN,
            bio: 'MBBS [COLOMBO](1998)',
            specialities: [
                'Consultant Pathologist'
            ],
            consultationPrice: 'Rs. 1500.00'
        };
        this.booking = {
            bookingId: 2387,
            doctorId: '4352545235',
            patientId: '76531',
            doctorName: 'Dr. Tim Cook',
            patientTitle: 'Mr',
            patientAge: 29,
            patientName: 'John Doe',
            skypeID: 'kafkjnf34',
            phoneNumber: '0773092511',
            bookingStatus: BookingStatus.BOOKING_NOT_STARTED,
            messageThread: [
                {
                    sender: 'patient',
                    message: 'Hi doctor, I have a headache and a cough.'
                },
                {
                    sender: 'doctor',
                    message: 'Hi John, do you have any allergies?'
                },
                {
                    sender: 'patient',
                    message: 'I\'m allergic to panadol'
                },
                {
                    sender: 'doctor',
                    message: 'Thanks.'
                },
                {
                    sender: 'patient',
                    message: 'THANK YOU DOC!.'
                },
                {
                    sender: 'patient',
                    message: 'Can you send me a prescription btw?'
                },
                {
                    sender: 'doctor',
                    message: 'Sure. I will send you.'
                },
                {
                    sender: 'patient',
                    message: 'Awesome. Thanks'
                }
            ],
            bookingPrice: 'Rs. 2000.00',
            doctorCharge: 'Rs. 1800.00'
        };
        this.items = [
            'Augmentine 625mg bd - 5 days',
            'Omeprazole 20mg bd - 5 days',
            'Fexofenadine 180mg 1 night - 5 days'
        ];
        this.preview = false;
        this.prescriptionList = [
            '',
            ''
        ];
    }
    ngOnInit() {
        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    }
    copyToClipBoard() {
        const copyText = document.getElementById('skypeId');
        // @ts-ignore
        copyText.select();
        document.execCommand('copy');
        // @ts-ignore
        alert('Copied the text: ' + copyText.value);
    }
    previewToggle($event) {
        if ($event === 'preview') {
            this.preview = true;
        }
        else {
            this.preview = false;
        }
    }
    SavePDF() {
        // var pdf = new jsPDF('p','pt','a4');
        // pdf.html2pdf(document.getElementById('pdfTable'), function() {
        //   pdf.save('pdfTable.pdf');
        // });
    }
    goToAppointmentList(b) {
        this.router.navigate(['appointment/prescriptionList']).then(r => {
        });
    }
};
tslib_1.__decorate([
    ViewChild('test', { static: true })
], PrescriptionComponent.prototype, "el", void 0);
PrescriptionComponent = tslib_1.__decorate([
    Component({
        selector: 'app-prescription',
        templateUrl: './prescription.component.html',
        styleUrls: ['./prescription.component.css']
    })
], PrescriptionComponent);
export { PrescriptionComponent };
//# sourceMappingURL=prescription.component.js.map
