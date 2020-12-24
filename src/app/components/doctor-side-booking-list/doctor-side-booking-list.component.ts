import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-side-booking-list',
  templateUrl: './doctor-side-booking-list.component.html',
  styleUrls: ['./doctor-side-booking-list.component.css']
})
export class DoctorSideBookingListComponent implements OnInit {

  bookingListSlot1 = {
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

  bookingListSlot2 = {
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

  bookingListSlot3 = {
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
  visible = false;
  bookingSlotListVisible = true;
  selectedSlot: any;
  overTheAppointmentCard = null;

  constructor() { }

  ngOnInit() {
    this.selectedSlot = this.bookingListSlot2;
  }

  selectBooking($event: string) {
    console.log($event);
  }

  onMouseEnter($event: number) {
    this.overTheAppointmentCard = $event;
  }

  onMouseLeave() {
    this.overTheAppointmentCard = null;
  }

  isOverTheAppointmentCard($event: number) {
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

  selectSlot(slot: any) {
    this.selectedSlot = slot;
    this.bookingSlotListVisible = !this.bookingSlotListVisible;

  }
}

export enum BookingStatus {
  BOOKING_CANCELLED = 'BOOKING_CANCELLED',
  BOOKING_COMPLETED = 'BOOKING_COMPLETED',
  BOOKING_CURRENT = 'BOOKING_CURRENT',
  BOOKING_NOT_STARTED = 'BOOKING_NOT_STARTED'
}

export enum Colors {
  BOOKING_CANCELLED = '#ff6666',
  BOOKING_COMPLETED = '#e6e6e6',
  BOOKING_CURRENT = '#99ccff',
  BOOKING_NOT_STARTED = '#d5ff80'
}
