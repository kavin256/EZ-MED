import { Injectable } from '@angular/core';
import {DataKey} from './data-store.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  url = 'http://localhost:8080/user/check?username=ims@abc.com';
  constructor(private http: HttpClient) {

  }

  public login() {
    this.http.get(this.url)
        .subscribe(
            data => {
              console.log(data);
            },
            error => {
              console.log(error);
            });
  }

  /*private handleProcessDataWhenLoadResponse<T>(results: any, dataKey: DataKey) { 
    if (results && dataKey) { 
      const resultsWrapper: TBXResponseWrapper<T> = results.body; 
      if (resultsWrapper) { 
        this.dataStore.set(dataKey, resultsWrapper); 
      } 
    } 
  }

  private processError(error: TBXResponseWrapperError, endpointId: string, type: TcErrorType.TYPE, dataKey: DataKey) { 
    let tcApiError: TcApiError = new TcApiError(error, endpointId, type); 
    this.errorProcessor.process(tcApiError); 
    this.dataStore.set(dataKey, tcApiError); 
  }*/
}
