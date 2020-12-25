import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Constants, DoctorType} from '../../utils/Constants';
import {DataHandlerService} from '../../services/data-handler.service';
import {UserData} from '../../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataKey, DataStoreService} from '../../services/data-store.service';
import {DataLoaderService} from '../../services/data-loader.service';

@Component({
  selector: 'app-search-professionals-main',
  templateUrl: './search-professionals-main.component.html',
  styleUrls: ['./search-professionals-main.component.css']
})
export class SearchProfessionalsMainComponent implements OnInit {

  searchString = null;
  professionalList = null;

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
      private dataStore: DataStoreService,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    this.InitialSearch();
  }

  search() {
    if (
        !this.searchString &&
        !this.selectedCategory &&
        !this.selectedSpecialization
    ) {
      this.InitialSearch();
    } else {
      // General Practitioners don't have a specialization
      if (this.selectedCategory === DoctorType.GEN) {
        this.selectedSpecialization = null;
      }

      // converting professionalType to a database readable format
      if (this.selectedCategory) {
        this.selectedCategory = this.dataHandlerService.convertProfessionalTypeToDBFormat(
            JSON.parse(JSON.stringify(this.selectedCategory)));
      }

      // making 'Any' option null
      if (this.selectedSpecialization === 'Any') {
        this.selectedSpecialization = null;
      }

      // create url and send request
      const url = Constants.BASE_URL + Constants.PROFESSIONAL_SEARCH;
      const httpParams = new HttpParams()
          .set('name', this.searchString);
      // Todo: complete after null handling in back end
      // .set('professionalType', this.selectedCategory);
      // .set('category', this.selectedSpecialization);
      this.dataLoaderService.get<UserData>(url, httpParams, new HttpHeaders(), DataKey.createdUser)
          .then((data: any) => {
            if (data && data.status && data.status.code === 1) {
              this.professionalList = data.data[0];
            } else if (data && data.status && data.status.code === -1) {
              this.resetVariables();
            }
          });
    }
  }

  private resetVariables() {
    this.professionalList = [];
    this.searchString = null;
    this.selectedCategory = null;
    this.selectedSpecialization = null;
  }

  selectProfessional($event: string) {
    this.loadProfessionalData($event);
    this.router.navigate(['appointmentTime']).then(r => {
    });
  }

  private loadProfessionalData($event: string) {
    // create url and send request
    const url = Constants.BASE_URL + Constants.AVAILABLE_APPOINTMENTS_FOR_A_PROFESSIONAL + $event;
    this.dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.createdUser)
        .then((data: any) => {
          if (data && data.status && data.status.code === 1) {
            this.dataStore.set(DataKey.availableAppointmentsForProfessional, data.data[0]);
          } else if (data && data.status && data.status.code === -1) {
            this.dataStore.set(DataKey.availableAppointmentsForProfessional, null);
          }
        });
  }

  private InitialSearch() {
    this.professionalList = [
      {
        id: 1,
        title: 'Dr.',
        firstName: 'Dummy',
        lastName: 'One',
        professionalType: DoctorType.CON,
        qualifications: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
        specialityA: 'Neurologist',
        specialityB: 'Pediatrician',
        specialityC: '',
        priceForAppointment: '2000',
        isSkypePreferred: true,
        isWhatsAppPreferred: true
      },
      {
        id: 2,
        title: 'Dr.',
        firstName: 'Dummy',
        lastName: 'Two',
        professionalType: DoctorType.GEN,
        qualifications: 'MBBS [COLOMBO](1998)',
        specialityA: 'Pathologist',
        specialityB: '',
        specialityC: '',
        priceForAppointment: '1500',
        isSkypePreferred: false,
        isWhatsAppPreferred: true
      },
      {
        id: 3,
        title: 'Dr.',
        firstName: 'Dummy',
        lastName: 'Three',
        professionalType: DoctorType.OTH,
        qualifications: 'MBBS [RUHUNA](2000)',
        specialityA: 'Clinical Nutritionist',
        specialityB: '',
        specialityC: '',
        priceForAppointment: '2500',
        isSkypePreferred: true,
        isWhatsAppPreferred: false
      }
    ];
  }
}
