import { Component, OnInit } from '@angular/core';
import {SessionStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    // if not logged In this page should not be able to access
    this.dataHandlerService.redirectToSignUpIfNotLoggedIn(JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser)));
  }

}
