import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

    selectPrescription() {
      this.router.navigate(['appointment/prescription']).then(r => {
      });
    }
}
