import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LocalStorageKeys } from '../../services/data-store.service';
let DoctorSideBookingListComponent = class DoctorSideBookingListComponent {
    constructor(dataHandlerService) {
        this.dataHandlerService = dataHandlerService;
        this.RESULTS_PER_PAGE = 5;
        this.PAGINATION_START = 0;
        this.PAGINATION_END = this.RESULTS_PER_PAGE;
        this.bookingListSlot1 = {
            startTime: '07.00 A.M.',
            endTime: '12.00 P.M.',
            bookings: [
                {
                    bookingId: 2387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                },
                {
                    bookingId: 2387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                },
                {
                    bookingId: 2387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                },
                {
                    bookingId: 1196,
                    patientId: '65456',
                    patientName: 'Sumanasiri',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                },
                {
                    bookingId: 2387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                }
            ]
        };
        this.bookingListSlot2 = {
            startTime: '02.00 P.M.',
            endTime: '04.00 P.M.',
            bookings: [
                {
                    bookingId: 2387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                },
                {
                    bookingId: 1196,
                    patientId: '65456',
                    patientName: 'Sumanasiri',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                },
                {
                    bookingId: 2387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                },
                {
                    bookingId: 2387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                },
                {
                    bookingId: 1196,
                    patientId: '65456',
                    patientName: 'Sumanasiri',
                    bookingStatus: BookingStatus.BOOKING_CANCELLED
                },
                {
                    bookingId: 2387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                }
            ]
        };
        this.bookingListSlot3 = {
            startTime: '08.00 P.M.',
            endTime: '10.00 P.M.',
            bookings: [
                {
                    bookingId: 2387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_COMPLETED
                },
                {
                    bookingId: 1196,
                    patientId: '65456',
                    patientName: 'Sumanasiri',
                    bookingStatus: BookingStatus.BOOKING_CURRENT
                },
                {
                    bookingId: 2383,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_NOT_STARTED
                },
                {
                    bookingId: 2367,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_NOT_STARTED
                },
                {
                    bookingId: 1156,
                    patientId: '65456',
                    patientName: 'Sumanasiri',
                    bookingStatus: BookingStatus.BOOKING_NOT_STARTED
                },
                {
                    bookingId: 4387,
                    patientId: '76531',
                    patientName: 'John Doe',
                    bookingStatus: BookingStatus.BOOKING_NOT_STARTED
                }
            ]
        };
        this.visible = false;
        this.bookingSlotListVisible = true;
        this.overTheAppointmentCard = null;
    }
    ngOnInit() {
        this.selectedSlot = this.bookingListSlot2;
        // if not logged In this page should not be able to access
        this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser)));
    }
    selectBooking($event) {
        console.log($event);
    }
    onMouseEnter($event) {
        this.overTheAppointmentCard = $event;
    }
    onMouseLeave() {
        this.overTheAppointmentCard = null;
    }
    isOverTheAppointmentCard($event) {
        return $event === this.overTheAppointmentCard;
    }
    // selectProfessional_($event: number) {
    //   this.selectProfessional.emit($event);
    // }
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
    selectSlot(slot) {
        this.selectedSlot = slot;
        this.bookingSlotListVisible = !this.bookingSlotListVisible;
    }
    goToPage($event) {
        this.PAGINATION_START = $event.pageIndex * $event.pageSize;
        this.PAGINATION_END = this.PAGINATION_START + $event.pageSize;
    }
};
DoctorSideBookingListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-doctor-side-booking-list',
        templateUrl: './doctor-side-booking-list.component.html',
        styleUrls: ['./doctor-side-booking-list.component.css']
    })
], DoctorSideBookingListComponent);
export { DoctorSideBookingListComponent };
export var BookingStatus;
(function (BookingStatus) {
    BookingStatus["BOOKING_CANCELLED"] = "BOOKING_CANCELLED";
    BookingStatus["BOOKING_COMPLETED"] = "BOOKING_COMPLETED";
    BookingStatus["BOOKING_CURRENT"] = "BOOKING_CURRENT";
    BookingStatus["BOOKING_NOT_STARTED"] = "BOOKING_NOT_STARTED";
})(BookingStatus || (BookingStatus = {}));
export var Colors;
(function (Colors) {
    Colors["BOOKING_CANCELLED"] = "#ff6666";
    Colors["BOOKING_COMPLETED"] = "#e6e6e6";
    Colors["BOOKING_CURRENT"] = "#99ccff";
    Colors["BOOKING_NOT_STARTED"] = "#d5ff80";
})(Colors || (Colors = {}));
//# sourceMappingURL=doctor-side-booking-list.component.js.map
