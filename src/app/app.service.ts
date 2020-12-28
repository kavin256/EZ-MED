import { Injectable } from '@angular/core';
import {currencyCodes, DoctorTitles, DoctorType} from './utils/Constants';
import {DataKey, DataStoreService, SessionStorageKeys} from './services/data-store.service';
import {DataHandlerService} from './services/data-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
      private dataStore: DataStoreService,
  ) { }

  public loadModuleConfigurations() {
  }

  public loadPermissions() {
  }

  public userLogin() {
  }

  public loadUserDetails() {
    // this.dataStore.set(DataKey.loggedInUser, this.dataHandlerService.loadUserData(), true);
    // localStorage.setItem(SessionStorageKeys.loggedInUser, JSON.stringify(this.dataHandlerService.loadUserData()));
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

}
