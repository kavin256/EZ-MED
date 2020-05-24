import { Component, OnInit } from '@angular/core';
import {professionalType} from '../search-professionals/search-professionals.component';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  searchString = null;

  professionalList = [
    {
      id: 1,
      name: 'Dr. Nuwan Chinthaka',
      professionalType: professionalType.CONSULTANT,
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
      professionalType: professionalType.GENERAL_PRACTITIONER,
      bio: 'MBBS [COLOMBO](1998)',
      specialities: [
        'Consultant Pathologist'
      ],
      consultationPrice: 'Rs. 1500.00'
    },
    {
      id: 3,
      name: 'Dr. Eric Deepal',
      professionalType: professionalType.SUPPORT_MEDICAL_SERVICE,
      bio: 'MBBS [RUHUNA](2000)',
      specialities: [
        'Consultant Clinical Nutritionist'
      ],
      consultationPrice: 'Rs. 2500.00'
    }
  ];

  search() {
    console.log('jhbrch');
  }

  constructor() { }

  ngOnInit() {
  }

  selectDoc($event: number) {
    console.log($event);
  }
}
