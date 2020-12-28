import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BookingStatus } from '../doctor-side-booking-list/doctor-side-booking-list.component';
import { LocalStorageKeys } from '../../services/data-store.service';
let DoctorSideBookingComponent = class DoctorSideBookingComponent {
    constructor(dataHandlerService) {
        this.dataHandlerService = dataHandlerService;
        this.inProgress = false;
        this.isConfirmationActive = false;
        this.changeRequestSent = false;
        this.booking = {
            id: 2387,
            createdDateTime: new Date(2020, 4, 20, 10, 45),
            appointmentDateTime: new Date(2020, 4, 21, 10, 0),
            durationInMinutes: 15,
            status: BookingStatus.BOOKING_NOT_STARTED,
            price: 'Rs. 2000.00',
            doctorNotes: [],
            userNotes: [],
            cancellationRule: '',
            messageThread: [
                {
                    sender: 'doctor',
                    message: 'jhbsdkcsd'
                },
                {
                    sender: 'patient',
                    message: 'jhbsdddfdfdkcsd'
                },
                {
                    sender: 'doctor',
                    message: 'hgvbhashjd'
                }
            ]
        };
        this.patient = { patientId: '76531', patientName: 'Mr. John Doe',
            contactNumber: '0773092511', whatsAppNumber: '0773092511', email: 'kavin256@gmail.com',
            birthday: new Date(1993, 4, 21).toLocaleDateString('en-US'),
            age: 33,
            knownAllergies: 'allergic to bad music, allergic to negative people' };
        this.doctor = { doctorId: '4352545235', doctorName: 'Dr. Tim Cook' };
        this.isPatientDetailsShown = true;
    }
    ngOnInit() {
        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    }
    userConsent() {
        this.isConfirmationActive = !this.isConfirmationActive;
    }
    cancel() {
        // this.updateSchedule();
        this.isConfirmationActive = false;
        this.changeRequestSent = true;
        this.booking.status = BookingStatus.BOOKING_CANCELLED;
    }
    dismiss() {
        this.isConfirmationActive = false;
        this.changeRequestSent = false;
    }
};
DoctorSideBookingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-doctor-side-booking',
        templateUrl: './doctor-side-booking.component.html',
        styleUrls: ['./doctor-side-booking.component.css']
    })
], DoctorSideBookingComponent);
export { DoctorSideBookingComponent };
//# sourceMappingURL=doctor-side-booking.component.js.map
