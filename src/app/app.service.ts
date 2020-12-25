import { Injectable } from '@angular/core';
import {currencyCodes, DoctorTitles, DoctorType} from './utils/Constants';
import {DataKey, DataStoreService} from './services/data-store.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
      private dataStore: DataStoreService
  ) { }

  public loadModuleConfigurations() {
  }

  public loadPermissions() {
  }

  public userLogin() {
  }

  public loadUserDetails() {
    // this.dataStore.set(DataKey.loggedUser, this.loadDoctorSpecificDataFromMock(), true);
    // this.dataStore.set(DataKey.loggedUser, this.loadPatientSpecificDataFromMock(), true);
  }

  private loadPatientSpecificDataFromMock() {
    const data = {
      doctor: true,
      patientData: null,
      doctorData: {
        username: 'johndoe@gmail.com',
        title: DoctorTitles.DR,
        firstName: 'John',
        lastName: 'Doe',
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
      }
    };
    return data;
  }

  private loadDoctorSpecificDataFromMock() {
    const data = {
      doctor: true,
      patientData: null,
      doctorData: {
        username: 'johndoe@gmail.com',
        title: DoctorTitles.DR,
        firstName: 'John',
        lastName: 'Doe',
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
      }
    };
    return data;
  }
}
