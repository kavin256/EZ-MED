import { Component, OnInit } from '@angular/core';
import {professionalType} from '../search-professionals/search-professionals.component';

@Component({
  selector: 'app-search-professionals-main',
  templateUrl: './search-professionals-main.component.html',
  styleUrls: ['./search-professionals-main.component.css']
})
export class SearchProfessionalsMainComponent implements OnInit {

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
      consultationPrice: 'Rs. 2000.00',
      isSkypePreferred: true,
      isWhatsAppPreferred: true
    },
    {
      id: 2,
      name: 'Dr. Punya Anupama',
      professionalType: professionalType.GENERAL_PRACTITIONER,
      bio: 'MBBS [COLOMBO](1998)',
      specialities: [
        'Consultant Pathologist'
      ],
      consultationPrice: 'Rs. 1500.00',
      isSkypePreferred: false,
      isWhatsAppPreferred: true
    },
    {
      id: 3,
      name: 'Dr. Eric Deepal',
      professionalType: professionalType.SUPPORT_MEDICAL_SERVICE,
      bio: 'MBBS [RUHUNA](2000)',
      specialities: [
        'Consultant Clinical Nutritionist'
      ],
      consultationPrice: 'Rs. 2500.00',
      isSkypePreferred: true,
      isWhatsAppPreferred: false
    }
  ];
  selectedCategory: any;
  categories = [
    {
      category: 'Consultants'
    },
    {
      category: 'General Practitioners'
    },
    {
      category: 'Counsellors'
    },
    {
      category: 'Other Medical Service Professionals'
    }
  ];

  subCategories = [
    {
      category: 'Chest Docs'
    },
    {
      category: 'ENT'
    },
    {
      category: 'Immunologists'
    },
    {
      category: 'Anesthesiologists'
    }
  ];

  selectedSpecialization: any;

  search() {
    console.log('jhbrch');
  }

  constructor() { }

  ngOnInit() {
  }

  selectDoc($event: number) {
    console.log($event);
  }
  // funOne() {
  //   console.log('funOne');
  // }
  // funTwo() {
  //   console.log('funTwo');
  // }

  getTimeSlots(selectedCategory: any) {
    // const found = this.doctorSchedule.schedule.find((scheduleObj) => {
    //   return scheduleObj.title = selectedCategory;
    // });
    // return [found.slot1, found.slot2, found.slot3];
  }
}
