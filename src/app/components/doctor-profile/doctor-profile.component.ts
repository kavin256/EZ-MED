import {Component, OnInit} from '@angular/core';
import {professionalType} from '../search-professionals/search-professionals.component';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {Constants} from '../../utils/Constants';
import {DataKey} from '../../services/data-store.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  selectedImage: File;
  profileUsername: string;
  constants: Constants = new Constants();

  doctor = {
    id: 1,
    title: 'Mr.',
    name: 'John Doe',
    professionalType: professionalType.CONSULTANT,
    doctorRegistrationNumber: 'reg/34234235',
    qualificationString: 'MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India',
    specializations: ['Pulmonologist', 'Dermatologist', ''],
    pricePerConsultation: 1500,
    priceCurrency: 'LKR',
    isActiveProfile: true
  };

  titles = [
    {value: 'Dr.'},
    {value: 'Mr.'},
    {value: 'Mrs.'},
    {value: 'Ms.'},
    {value: 'Prof.'}
  ];

  specializations = [
    {value: 'None'},
    {value: 'Immunologist'},
    {value: 'Cardiologist'},
    {value: 'Pulmonologist'},
    {value: 'Radiologist'},
    {value: 'Dermatologist'},
    {value: 'Clinical Nutritionist'},
    {value: 'Endocrinologist'}
  ];

  bookings = [
    {
      name: 'Simon ',
      email: 'jhbksrc@gmail.com',
      bookingNo: 1,
      state: 'Done'
    },
    {
      name: 'George',
      email: 'geo@yahoo.com',
      bookingNo: 2,
      state: 'In Progress'
    },
    {
      name: 'Tom',
      email: 'kfhb@hotmail.com',
      bookingNo: 3,
      state: 'New'
    },
    {
      name: 'John',
      email: 'kjn@gmail.com',
      bookingNo: 4,
      state: 'Cancelled'
    },
    {
      name: 'Emilie',
      email: 'hbjdc@yahoo.com',
      bookingNo: 5,
      state: 'New'
    }
  ];
  doctorSchedule = {
    schedule: [
      {
        title: 'Monday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Tuesday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Wednesday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Monday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Friday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Saturday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      },
      {
        title: 'Sunday',
        slot1: '12.30 P.M. - 1.30 P.M.',
        slot2: '3.30 P.M. - 5.00 P.M.',
        slot3: '6.00 P.M. - 8.00 P.M.'
      }
    ]
  };

  editable = false;

  constructor(
      private router: Router,
      private dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {
  }

  getColor(state: string) {
    return '#000000';
  }

  toggleEditable(editable: boolean) {
    this.editable = editable;
  }

  isConsultant(type: professionalType) {
    return type === professionalType.CONSULTANT;
  }

  goToMyAppointments() {
    this.router.navigate(['doctor/appointments']).then(r => {
    });
  }

  editSchedule() {
    this.router.navigate(['doctor/schedule']).then(r => {
    });
  }

  uploadImage(event) {
    this.selectedImage = event.target.file;
    const formData = new FormData();
    formData.append('image', this.selectedImage);
    formData.append( 'username', this.profileUsername);

    // sent request
    const url = this.constants.BASE_URL + this.constants.UPLOAD_USER_IMAGE;
    this.dataLoaderService.post(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, formData);
  }
}
