import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {Constants, currencyCodes, DoctorTitles, DoctorType, Specializations} from '../../utils/Constants';
import {DataKey, DataStoreService} from '../../services/data-store.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DoctorSpecificData, UserData} from '../../models/user-data';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  selectedImage: File;
  // profileUsername = 'dfg';
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
      private dataStore: DataStoreService,
      private dataHandlerService: DataHandlerService,
      private dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {
    if (this.dataStore.get(DataKey.loggedUser).getValue() && this.dataStore.get(DataKey.loggedUser).getValue().doctorData) {
      this.doctorSpecificData = this.dataStore.get(DataKey.loggedUser).getValue().doctorData;
    }
  }

  getColor(state: string) {
    return '#000000';
  }

  toggleEditable(editable: boolean) {
    this.editable = editable;
  }

  saveData() {
    // converting doctorType to a database readable format
    this.doctorSpecificData.doctorType = this.dataHandlerService.convertDoctorType(
        JSON.parse(JSON.stringify(this.doctorSpecificData.doctorType)));

    const url = Constants.BASE_URL + Constants.UPDATE_PROFESSIONAL_SPECIFIC_DATA + this.doctorSpecificData.username;
    this.dataLoaderService.put<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, this.doctorSpecificData )
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            // console.log('data');
            // console.log(data.data);
            this.toggleEditable(false);

          } else if (data && data.status && data.status.code === -1) {
            // console.log('data null');
            // console.log(data.data);
          }
        });
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
    formData.append( 'username', this.doctorSpecificData.username);

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
}
