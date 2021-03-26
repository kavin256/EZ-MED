import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './utils/Constants';
import {DataLoaderService} from './services/data-loader.service';
import {DataStoreService} from './services/data-store.service';
import {DataHandlerService} from './services/data-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
      private http: HttpClient,
      private dataHandlerService: DataHandlerService,
      private dataStore: DataStoreService
  ) { }

  public loadModuleConfigurations() {
    const url = Constants.API_BASE_URL + Constants.LOAD_CONFIGURATIONS;
    return new Promise((resolve, reject) => {
      this.http.get(url, {
      }).subscribe(
          ( data: any) => {
            this.dataHandlerService.setConfigs(data.data[0]);
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
