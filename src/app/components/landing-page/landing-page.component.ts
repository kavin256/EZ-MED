import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {DataLoaderService} from '../../services/data-loader.service';
import {AuthModel} from '../../models/auth-model';
import {DataKey, DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
import {RequestOptions} from '../../models/request-options';
import {AuthResponse} from '../../models/auth-response';
import {Constants} from '../../utils/Constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnChanges {

  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();

  constructor(private router: Router,
              private dataLoader: DataLoaderService,
              private dataStore: DataStoreService) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.flow && changes.flow.currentValue) {
      this.flow = changes.flow.currentValue;
    }
  }

  goToSearchPage() {
    this.router.navigate(['searchProfessionals']).then(r => {
    });

    const obj: AuthModel = new AuthModel();
    obj.username = 'foo12345';
    obj.password = 'foo';
    this.dataLoader.login<AuthResponse>(Constants.API_BASE_URL + '/authenticate', new RequestOptions(), obj, DataKey.authKey);

    this.dataStore.get(DataKey.authKey, true).subscribe(
        (data) => {
          console.log(data);
        }
    );
  }

  isDoctorLoggedIn() {
    if (localStorage.getItem(LocalStorageKeys.loggedInUser)) {
      const loggedInUser = JSON.parse(localStorage.getItem(LocalStorageKeys.loggedInUser));
      return loggedInUser && loggedInUser.doctor;
    } else {
      return false;
    }
  }
}
