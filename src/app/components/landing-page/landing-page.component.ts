import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {SessionStorageKeys} from '../../services/data-store.service';
import {UserData} from '../../models/user-data';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnChanges {

  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();

  loggedInUser: UserData = null;

  constructor(public router: Router) {}

  ngOnInit() {
    if (sessionStorage.getItem(SessionStorageKeys.loggedInUser)) {
      this.loggedInUser = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.flow && changes.flow.currentValue) {
      this.flow = changes.flow.currentValue;
    }
  }

  goToSearchPage() {
    if (!this.isDoctorLoggedIn()) {
      this.router.navigate(['searchProfessionals']).then(r => {});
    }
  }

  isDoctorLoggedIn() {
    if (sessionStorage.getItem(SessionStorageKeys.loggedInUser)) {
      const loggedInUser = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));
      return loggedInUser && loggedInUser.doctor;
    } else {
      return false;
    }
  }

  logIn(): void {
    this.router.navigate(['signup']).then(r => {});
  }
  dashboard(): void {
    if (this.loggedInUser && this.loggedInUser.doctor !== null && this.loggedInUser.doctor) {
      this.router.navigate(['doctor/dashboard']).then(r => {
      });
    } else if (this.loggedInUser && this.loggedInUser.doctor !== null && !this.loggedInUser.doctor) {
      this.router.navigate(['user/dashboard']).then(r => {
      });
    }
  }
}
