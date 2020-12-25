import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Constants, DoctorType} from '../../utils/Constants';
import {DataHandlerService} from '../../services/data-handler.service';
import {UserData} from '../../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataKey} from '../../services/data-store.service';
import {DataLoaderService} from '../../services/data-loader.service';

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
      title: 'Dr.',
      firstName: 'Nuwan',
      lastName: 'Chinthaka',
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
      title: 'Dr.',
      firstName: 'Punya',
      lastName: 'Anupama',
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
      title: 'Dr.',
      firstName: 'Eric',
      lastName: 'Deepal',
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
  selectedCategory: any = null;
  selectedSpecialization: any = null;

  categories = [
    {
      category: DoctorType.CON
    },
    {
      category: DoctorType.GEN
    },
    {
      category: DoctorType.COUN
    },
    {
      category: DoctorType.OTH
    }
  ];

  subCategories = [
    {
      category: 'Any'
    },
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

  constructor(
      private router: Router,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
  }

  search() {
    // General Practitioners don't have a specialization
    if (this.selectedCategory === DoctorType.GEN) {
      this.selectedSpecialization = null;
    }

    // converting doctorType to a database readable format
    if (this.selectedCategory) {
      this.selectedCategory = this.dataHandlerService.convertDoctorType(
          JSON.parse(JSON.stringify(this.selectedCategory)));
    }

    // making 'Any' option null
    if (this.selectedSpecialization === 'Any') {
      this.selectedSpecialization = null;
    }

    console.log(this.searchString);
    console.log(this.selectedCategory);
    console.log(this.selectedSpecialization);

    // create url and send request
    const url = Constants.BASE_URL + Constants.PROFESSIONAL_SEARCH;
    const httpParams = new HttpParams()
        .set('name', this.searchString)
        .set('doctorType', this.selectedCategory)
        .set('category', this.selectedSpecialization);
    // httpParams.set('name', 'san');
    this.dataLoaderService.get<UserData>(url, httpParams, new HttpHeaders(), DataKey.createdUser)
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            console.log('data');
            console.log(data.data);
          } else if (data && data.status && data.status.code === -1) {
            // console.log('data null');
            // console.log(data.data);
          }
        });
  }

  selectProfessional($event: number) {
    this.loadProfessionalData();
    this.router.navigate(['appointmentTime']).then(r => {
    });
  }

  // Todo: complete
  private loadProfessionalData() {
  }
}
