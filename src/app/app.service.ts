import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './utils/Constants';
import {DataStoreService} from './services/data-store.service';
import {DataHandlerService} from './services/data-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
      public http: HttpClient,
      public dataHandlerService: DataHandlerService,
      public dataStore: DataStoreService
  ) { }

  public loadModuleConfigurations() {
    const url = Constants.API_BASE_URL + Constants.CONFIGURATIONS;
    return new Promise((resolve, reject) => {
      this.http.get(url, {
      }).subscribe(
          ( data: any) => {
            if (data && data.status && data.status.code === 1) {
              this.dataHandlerService.setConfigs(data.data[0]);
            } else {
              reject(data);
            }
            resolve(data);
          }, (data) => {
            reject(data);
          });
    });
  }

  public loadPermissions() {
  }

  public userLogin() {
  }
}
