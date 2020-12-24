import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DoctorType} from '../../utils/Constants';

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
      doctorType: DoctorType.CON,
      qualifications: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
      specialityA: 'Neurologist',
      specialityB: 'Pediatrician',
      specialityC: '',
      consultationPrice: 'Rs. 2000.00',
      isSkypePreferred: true,
      isWhatsAppPreferred: true
    },
    {
      id: 2,
      name: 'Dr. Punya Anupama',
      doctorType: DoctorType.GEN,
      qualifications: 'MBBS [COLOMBO](1998)',
      specialityA: 'Pathologist',
      specialityB: '',
      specialityC: '',
      consultationPrice: 'Rs. 1500.00',
      isSkypePreferred: false,
      isWhatsAppPreferred: true
    },
    {
      id: 3,
      name: 'Dr. Eric Deepal',
      doctorType: DoctorType.OTH,
      qualifications: 'MBBS [RUHUNA](2000)',
      specialityA: 'Clinical Nutritionist',
      specialityB: '',
      specialityC: '',
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

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

  selectProfessional($event: number) {
    this.router.navigate(['appointmentTime']).then(r => {
    });
  }
}
