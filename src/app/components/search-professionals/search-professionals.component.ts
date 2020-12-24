import { Component, OnInit } from '@angular/core';
import {DoctorType} from '../../utils/Constants';

@Component({
  selector: 'app-search-professionals',
  templateUrl: './search-professionals.component.html',
  styleUrls: ['./search-professionals.component.css']
})
export class SearchProfessionalsComponent implements OnInit {

  professionalListType = DoctorType.CON;
  selectedProfessionalType = 'option2';
  searchString = null;

  professionalList = [
    {
      id: 1,
      name: 'Dr. Nuwan Chinthaka',
      doctorType: DoctorType.CON,
      bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
      specialities: [
        'Consultant Neurologist',
        'Consultant Pediatrician'
      ],
      consultationPrice: 'Rs. 2000.00',
      isSkypePreferred: true,
      isWhatsAppPreferred: true
    },
    {
      id: 2,
      name: 'Dr. Punya Anupama',
      doctorType: DoctorType.CON,
      bio: 'MBBS [COLOMBO](1998)',
      specialities: [
        'Consultant Pathologist'
      ],
      consultationPrice: 'Rs. 1500.00',
      isSkypePreferred: true,
      isWhatsAppPreferred: false
    },
    {
      id: 3,
      name: 'Dr. Eric Deepal',
      doctorType: DoctorType.CON,
      bio: 'MBBS [RUHUNA](2000)',
      specialities: [
        'Consultant Clinical Nutritionist'
      ],
      consultationPrice: 'Rs. 2500.00',
      isSkypePreferred: false,
      isWhatsAppPreferred: true
    }
  ];

  specializations = [

  ];

  constructor() { }

  ngOnInit() {
  }

  selectDoc($event: number) {
    console.log($event);
  }

  search() {
      console.log('jhbrch');
  }
}

