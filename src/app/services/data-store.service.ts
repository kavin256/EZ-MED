import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private data: Map<string, any> = new Map();
  private asyncData: Map<DataKey, BehaviorSubject<any>> = new Map();

  constructor() {
    for (const key in DataKey) {
      if (parseInt(key, 10) >= 0) {
        if (!this.asyncData.has(DataKey[DataKey[key]])) {
          this.asyncData.set(DataKey[DataKey[key]], new BehaviorSubject(null));
        }
      }
    }
  }

  public get(key: any, isAsync: boolean = true) {
    if (isAsync) {
      return this.asyncData.get(key);
    } else {
      return this.data.get(key);
    }
  }

  public set(key: any, data: any, isAsync: boolean = true) { 
    if (isAsync) { 
      if (!this.asyncData.has(key)) { 
        this.asyncData.set(key, null); 
      } 
      this.asyncData.get(key).next(data); 
    } else {
     this.data.set(key, data); 
    } 
  }

  public has(key: any, isAsync: boolean = true) { 
    if (isAsync) { 
      return this.asyncData.has(key); 
    } else { 
      return this.data.has(key); 
    } 
  }
}

export enum DataKey {
  error,
  authKey,
  loggedUser,
  loggedInUser,
  createdUser,
  uploadImage,
  doctorScheduleData,
  signUpResultObject,
  availableAppointmentsForProfessional
}
