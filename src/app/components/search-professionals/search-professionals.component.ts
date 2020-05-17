import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-professionals',
  templateUrl: './search-professionals.component.html',
  styleUrls: ['./search-professionals.component.css']
})
export class SearchProfessionalsComponent implements OnInit {

  professionalListType = professionalType.CONSULTANT;
  selectedProfessionalType = 'option2';


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
      professionalType: professionalType.CONSULTANT,
      bio: 'MBBS [COLOMBO](1998)',
      specialities: [
        'Consultant Pathologist'
      ],
      consultationPrice: 'Rs. 1500.00'
    },
    {
      id: 3,
      name: 'Dr. Eric Deepal',
      professionalType: professionalType.CONSULTANT,
      bio: 'MBBS [RUHUNA](2000)',
      specialities: [
        'Consultant Clinical Nutritionist'
      ],
      consultationPrice: 'Rs. 2500.00'
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

export enum professionalType {
  ANY = 'ANY',
  CONSULTANT = 'Consultant',
  GENERAL_PRACTITIONER = 'General Practitioner',
  SUPPORT_MEDICAL_SERVICE = 'Other Medical Practitioner'
}
