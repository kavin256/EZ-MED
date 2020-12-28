import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BookingStatus, Colors } from '../doctor-side-booking-list/doctor-side-booking-list.component';
import { DoctorType } from '../../utils/Constants';
import { LocalStorageKeys } from '../../services/data-store.service';
let PatientBookingListComponent = class PatientBookingListComponent {
    constructor(router, dataHandlerService) {
        this.router = router;
        this.dataHandlerService = dataHandlerService;
        this.currentDate = new Date();
        this.RESULTS_PER_PAGE = 5;
        this.PAGINATION_START = 0;
        this.PAGINATION_END = this.RESULTS_PER_PAGE;
        this.bookings = [
            {
                bookingId: 2387,
                doctorId: '76531',
                date: '03-04-2020',
                doctorName: 'Dr. John Doe',
                bookingStatus: BookingStatus.BOOKING_COMPLETED
            },
            {
                bookingId: 1196,
                doctorId: '65456',
                date: '18-05-2020',
                doctorName: 'Dr. Sumanasiri',
                bookingStatus: BookingStatus.BOOKING_CANCELLED
            },
            {
                bookingId: 5729,
                doctorId: '76537',
                date: '02-05-2020',
                doctorName: 'Dr. Tom Harrison',
                bookingStatus: BookingStatus.BOOKING_NOT_STARTED
            }
        ];
        this.title = 'MY BOOKINGS';
        this.titleBooking = 'BOOKING';
        this.selectedBookingId = null;
        this.showBookings = 'all'; // 'new' or 'all'
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
            patientName: 'John Doe',
            patientAge: 29,
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
        this.isConfirmationActive = false;
        this.changeRequestSent = false;
        this.items = [
            'Augmentine 625mg bd - 5 days',
            'Omeprazole 20mg bd - 5 days',
            'Fexofenadine 180mg 1 night - 5 days'
        ];
        this.prescriptionList = [
            {
                prescription: ['Augmentine 625mg bd - 5 days',
                    'Omeprazole 20mg bd - 5 days',
                    'Fexofenadine 180mg 1 night - 5 days']
            },
            {
                prescription: ['Augmentine 625mg bd - 5 days',
                    'Omeprazole 20mg bd - 5 days',
                    'Fexofenadine 180mg 1 night - 5 days']
            }
        ];
        this.isPrescriptionsVisible = false;
        this.selectedPrescription = null;
    }
    ngOnInit() {
        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    }
    selectBooking($event) {
        this.selectedBookingId = $event;
    }
    getColor($event) {
        switch ($event) {
            case BookingStatus.BOOKING_CANCELLED:
                return Colors.BOOKING_CANCELLED;
            case BookingStatus.BOOKING_NOT_STARTED:
                return Colors.BOOKING_NOT_STARTED;
            case BookingStatus.BOOKING_COMPLETED:
                return Colors.BOOKING_COMPLETED;
            case BookingStatus.BOOKING_CURRENT:
                return Colors.BOOKING_CURRENT;
            default:
                return Colors.BOOKING_NOT_STARTED;
        }
    }
    save() {
        this.isConfirmationActive = false;
        this.changeRequestSent = true;
    }
    cancel() {
        this.isConfirmationActive = false;
        this.changeRequestSent = false;
    }
    selectPrescription(prescription) {
        this.selectedPrescription = prescription;
    }
    showPrescriptions(bookingId, action) {
        this.isPrescriptionsVisible = action;
    }
    goToUserDashboard() {
        this.PAGINATION_START = 0;
        this.PAGINATION_END = this.RESULTS_PER_PAGE;
        this.router.navigate(['user/dashboard']).then(r => {
        });
    }
    goToPage($event) {
        this.PAGINATION_START = $event.pageIndex * $event.pageSize;
        this.PAGINATION_END = this.PAGINATION_START + $event.pageSize;
    }
    newBooking() {
        this.router.navigate(['searchProfessionals']).then(r => {
        });
    }
};
PatientBookingListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-patient-booking-list',
        templateUrl: './patient-booking-list.component.html',
        styleUrls: ['./patient-booking-list.component.css']
    })
], PatientBookingListComponent);
export { PatientBookingListComponent };
//# sourceMappingURL=patient-booking-list.component.js.map
