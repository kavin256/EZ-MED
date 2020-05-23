import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  faqs = [
      {
        q: 'How can I contact the doctor after placing a booking successfully?',
        a: 'Doctor will call you via Skype. When your booking number is near, make sure the doctor can reach you via Skype'
      },
      {
        q: 'How can I contact the doctor after placing a booking successfully?',
        a: 'Doctor will call you via Skype. When your booking number is near, make sure the doctor can reach you via Skype'
      },
      {
        q: 'How can I contact the doctor after placing a booking successfully?',
        a: 'Doctor will call you via Skype. When your booking number is near, make sure the doctor can reach you via Skype'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
