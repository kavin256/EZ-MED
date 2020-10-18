import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  phoneNumber = '0773092511';
  email = 'kavin256@gmail.com';
  facebook = 'https://www.facebook.com';

  constructor() { }

  ngOnInit() {
  }

}
