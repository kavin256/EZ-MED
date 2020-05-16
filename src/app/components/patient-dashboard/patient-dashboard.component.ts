import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  docList = [
    {
      id: 1,
      name: 'Dr. Nuwan Chinthaka',
      bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
      specialities: [
          'Consultant Neurologist',
          'Consultant Pediatrician'
      ],
      consultationPrice: 'Rs. 2000.00'
    },
    {
      id: 2,
      name: 'Dr. Punya Anupama',
      bio: 'MBBS [COLOMBO](1998)',
      specialities: [
        'Consultant Pathologist'
      ],
      consultationPrice: 'Rs. 1500.00'
    },
    {
      id: 3,
      name: 'Dr. Eric Deepal',
      bio: 'MBBS [RUHUNA](2000)',
      specialities: [
        'Consultant Clinical Nutritionist'
      ],
      consultationPrice: 'Rs. 2500.00'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectDoc($event: number) {
    console.log($event);
  }
}
