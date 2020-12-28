import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DoctorType, TRANSITION_PAGE_TYPE } from '../../utils/Constants';
import { DataKey, LocalStorageKeys } from '../../services/data-store.service';
let BookingEnterTimeComponent = class BookingEnterTimeComponent {
    constructor(router, datePipe, dataStore, dataLoaderService) {
        this.router = router;
        this.datePipe = datePipe;
        this.dataStore = dataStore;
        this.dataLoaderService = dataLoaderService;
        this.transitionType = null;
        this.doctor = {
            id: 1,
            name: 'Dr. Nuwan Chinthaka',
            professionalType: DoctorType.CON,
            bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
            specialities: [
                'Consultant Neurologist',
                'Consultant Pediatrician'
            ],
            consultationPrice: 'Rs. 2000.00'
        };
        this.availableAppointmentsForProfessional = [];
        this.isScheduleVisible = false;
        this.days = [
            {
                date: this.getDate(0).date,
                day: this.getDate(0).day,
                available: true
            },
            {
                date: this.getDate(1).date,
                day: this.getDate(1).day,
                available: true
            },
            {
                date: this.getDate(2).date,
                day: this.getDate(2).day,
                available: true
            },
            {
                date: this.getDate(3).date,
                day: this.getDate(3).day,
                available: true
            },
            {
                date: this.getDate(4).date,
                day: this.getDate(4).day,
                available: true
            },
            {
                date: this.getDate(5).date,
                day: this.getDate(5).day,
                available: true
            },
            {
                date: this.getDate(6).date,
                day: this.getDate(6).day,
                available: true
            },
        ];
        this.selectedAppointmentId = '';
        this.consultationTime = '8.00 P.M.';
        this.summaryShown = false;
        this.loggedInUser = null;
        this.showRedirectionMessage = false;
    }
    ngOnInit() {
        this.loggedInUser = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
        this.loadProfessional();
        this.loadAvailableAppointmentsForProfessional();
    }
    getDate(apart) {
        const today = new Date();
        today.setDate(today.getDate() + apart);
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();
        const date = mm + '/' + dd + '/' + yyyy;
        const dayNum = today.getDay();
        let day;
        switch (dayNum) {
            case 0:
                day = 'Sunday';
                break;
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
        }
        return {
            date,
            day
        };
    }
    scheduleVisibilityToggle($event) {
        this.isScheduleVisible = $event;
    }
    navigateToPaymentOrLogIn() {
        if (!this.loggedInUser) {
            this.transitionType = TRANSITION_PAGE_TYPE.LOGIN_REDIRECT;
            this.showRedirectionMessage = true;
        }
        else {
            this.router.navigate(['confirmation']).then(r => {
            });
        }
    }
    getTimeSlots(selectedDate) {
        const selectedFullDate = new Date(selectedDate);
        let dummyAppointments = [];
        const found = this.availableAppointmentsForProfessional.find((appointmentTime) => {
            const appointmentDate = new Date(appointmentTime.date);
            return appointmentDate.getFullYear() === selectedFullDate.getFullYear() &&
                appointmentDate.getMonth() === selectedFullDate.getMonth() &&
                appointmentDate.getDate() === selectedFullDate.getDate();
        });
        if (found && found.dummyAppointments) {
            dummyAppointments = found.dummyAppointments;
            dummyAppointments.forEach((app) => {
                if (app && app.appointmentTime) {
                    const dummyDate = new Date();
                    const h = JSON.parse(JSON.stringify(parseInt(app.appointmentTime.toString().split(':')[0], 10)));
                    const m = JSON.parse(JSON.stringify(parseInt(app.appointmentTime.toString().split(':')[1], 10)));
                    dummyDate.setHours(h);
                    dummyDate.setMinutes(m);
                    app.displayAppointmentTime = dummyDate;
                }
            });
        }
        return dummyAppointments;
    }
    continueClicked($event) {
        this.summaryShown = $event;
    }
    loadAvailableAppointmentsForProfessional() {
        this.availableAppointmentsForProfessional = [
            {
                date: '2020-12-26T20:30:00.000+0000',
                dummyAppointments: [
                    {
                        appointmentId: 16,
                        appointmentTime: '08:00:00',
                        timeSlotId: null
                    }
                ]
            },
            {
                date: '2020-12-27T20:30:00.000+0000',
                dummyAppointments: [
                    {
                        appointmentId: 21,
                        appointmentTime: '10:00:00',
                        timeSlotId: null
                    }
                ]
            },
            {
                date: '2020-12-25T20:30:00.000+0000',
                dummyAppointments: [
                    {
                        appointmentId: 12,
                        appointmentTime: '10:00:00',
                        timeSlotId: null
                    }
                ]
            }
        ];
        if (this.dataStore.get(DataKey.availableAppointmentsForProfessional).getValue()) {
            this.availableAppointmentsForProfessional = this.dataStore.get(DataKey.availableAppointmentsForProfessional).getValue();
        }
        this.filterOutUnavailableDays(this.days);
    }
    // Todo: complete
    loadProfessional() {
    }
    filterOutUnavailableDays(days) {
        days.forEach((day) => {
            if (this.getTimeSlots(day.date) && this.getTimeSlots(day.date).length > 0) {
                day.available = true;
            }
            else {
                day.available = false;
            }
        });
    }
    getDisplaySelectedTime(appointmentId) {
        let displaySelectedTime = '';
        if (appointmentId) {
            this.availableAppointmentsForProfessional.forEach((appointmentArray) => {
                if (appointmentArray.dummyAppointments) {
                    appointmentArray.dummyAppointments.forEach((appointment) => {
                        if (appointment && appointment.appointmentId && appointment.appointmentId === parseInt(appointmentId, 10)) {
                            displaySelectedTime = this.datePipe.transform(appointment.displayAppointmentTime, 'shortTime');
                        }
                    });
                }
            });
        }
        return displaySelectedTime;
    }
    goToSearchProfessionals() {
        this.router.navigate(['searchProfessionals']).then(r => {
        });
    }
    logIn() {
        this.router.navigate(['signup']).then(r => {
        });
    }
    clickFromTransitionPage($event) {
        switch ($event) {
            case 'back':
                this.showRedirectionMessage = false;
                break;
            case 'logIn':
                this.logIn();
                this.showRedirectionMessage = false;
                break;
        }
    }
};
BookingEnterTimeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-booking-enter-time',
        templateUrl: './booking-enter-time.component.html',
        styleUrls: ['./booking-enter-time.component.css']
    })
], BookingEnterTimeComponent);
export { BookingEnterTimeComponent };
//# sourceMappingURL=booking-enter-time.component.js.map
