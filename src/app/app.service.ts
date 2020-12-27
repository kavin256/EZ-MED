import { Injectable } from '@angular/core';
import {Constants, currencyCodes, DoctorTitles, DoctorType} from './utils/Constants';
import {DataKey, DataStoreService, SessionStorageKeys} from './services/data-store.service';
import {UserData} from './models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataLoaderService} from './services/data-loader.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
      private dataStore: DataStoreService,
      private dataLoaderService: DataLoaderService
  ) { }

  public loadModuleConfigurations() {
  }

  public loadPermissions() {
  }

  public userLogin() {
  }

  public loadUserDetails() {
    this.dataStore.set(DataKey.loggedInUser, this.loadUserData(), true);
    sessionStorage.setItem(SessionStorageKeys.loggedInUser, JSON.stringify(this.loadUserData()));
  }

  private loadUserDataFromMock() {
    const data = {
      doctor: true,
      patientData: null,
      doctorData: {
        userName: 'johndoe@gmail.com',
        title: DoctorTitles.DR,
        firstName: 'John',
        lastName: 'Doe',
        contactNumber: '+94773092323',
        whatsAppNumber: '+94773092323',
        regNo: 'reg/34234235',
        priceForAppointment: '1650',
        priceCurrency: currencyCodes.LKR,
        qualifications: 'MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India',
        professionalType: DoctorType.CON,
        specialityA: 'Pulmonologist',
        specialityB: 'Dermatologist',
        specialityC: '',
        availableForAppointment: 'true'
      }
    };
    return data;
  }

  private loadUserData() {
    let userData = null;
    const url = Constants.BASE_URL + Constants.GET_USER_DATA + 'dfg';
    this.dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.loggedInUser)
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            userData = data.data[0];
            return userData;
          } else if (data && data.status && data.status.code === -1) {
            return null;

            return {
              "patientData": null,
              "doctorData": {
                "userName": "dfg",
                "title": "Dr",
                "firstName": "John",
                "lastName": "Doe",
                "professionalType": "CON",
                "specialityA": "Pulmonologist",
                "specialityB": "Dermatologist",
                "specialityC": "",
                "regNo": "reg/34234235",
                "qualifications": "MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India",
                "priceForAppointment": '',
                "availableForAppointment": false
              },
              "doctor": true
            };
            return {
              "patientData": {
                "userName": "kavin88@abc.com",
                "title": "Mr",
                "firstName": "Milinda",
                "lastName": "Sandaruwan",
                "birthday": "1994-12-31T00:00:00.000+0000",
                "address": null,
                "contactNumber": "0123456789",
                "whatsAppNumber": "0123456789",
                "userAllergies": "mata allergies nehe",
                "male": false
              },
              "doctorData": null,
              "doctor": false
            };
          }
        });
  }
}
