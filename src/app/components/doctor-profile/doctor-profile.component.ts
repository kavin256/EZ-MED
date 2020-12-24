import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {Constants, currencyCodes, DoctorTitles, DoctorType, Specializations} from '../../utils/Constants';
import {DataKey} from '../../services/data-store.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DoctorSpecificData, UserData} from '../../models/user-data';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  selectedImage: File;
  profileUsername: string;
  doctorSpecificData: DoctorSpecificData;

  titles = [
    {value: DoctorTitles.DR},
    {value: DoctorTitles.MR},
    {value: DoctorTitles.MRS},
    {value: DoctorTitles.MS},
    {value: DoctorTitles.PROF},
  ];

  doctorTypes = [
    {value: DoctorType.CON},
    {value: DoctorType.GEN},
    {value: DoctorType.OTH}
  ];

  specializations = [
    {value: Specializations.None},
    {value: Specializations.Immunologist},
    {value: Specializations.Cardiologist},
    {value: Specializations.Pulmonologist},
    {value: Specializations.Radiologist},
    {value: Specializations.Dermatologist},
    {value: Specializations.Clinical_Nutritionist},
    {value: Specializations.Endocrinologist}
  ];

  editable = false;

  constructor(
      private router: Router,
      private dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {
    // this.loadDoctorSpecificData();
    this.loadDoctorSpecificDataFromMock();
  }

  getColor(state: string) {
    return '#000000';
  }

  toggleEditable(editable: boolean) {
    this.editable = editable;
  }

  isConsultant(type: string) {
    return type === DoctorType.CON;
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
    const url = Constants.BASE_URL + Constants.UPLOAD_USER_IMAGE;
    this.dataLoaderService.post<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, formData )
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            // console.log('data');
            // console.log(data.data);
          } else if (data && data.status && data.status.code === -1) {
            // console.log('data null');
            // console.log(data.data);
          }
        });
  }

  private loadDoctorSpecificData() {

  }

  private loadDoctorSpecificDataFromMock() {
    this.doctorSpecificData = {
      username: 'johndoe@gmail.com',
      title: DoctorTitles.DR,
      name: 'John Doe',
      contactNumber: '+94773092323',
      whatsAppNumber: '+94773092323',
      doctorRegistrationNumber: 'reg/34234235',
      pricePerAppointment: '1650',
      priceCurrency: currencyCodes.LKR,
      qualifications: 'MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India',
      doctorType: DoctorType.CON,
      specialityA: 'Pulmonologist',
      specialityB: 'Dermatologist',
      specialityC: '',
      isActiveProfile: 'true'
    };
  }
}
