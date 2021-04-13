import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Constants, DoctorType} from '../../utils/Constants';
import {DataHandlerService} from '../../services/data-handler.service';
import {UserData} from '../../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
import {DataLoaderService} from '../../services/data-loader.service';
import csc from 'country-state-city';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-search-professionals-main',
  templateUrl: './search-professionals-main.component.html',
  styleUrls: ['./search-professionals-main.component.css']
})
export class SearchProfessionalsMainComponent implements OnInit {

  searchString = null;
  professionalList = null;
  error = false;
  RESULTS_PER_PAGE = 10;
  PAGINATION_START = 0;
  PAGINATION_END = this.RESULTS_PER_PAGE;
  selectedCategory: any = null;
  selectedSpecialization: any = null;
  country = 'LK';

  categories = [
    {
      category: 'Any'
    },
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
  specializations;
  regions;
  private CONSULTANT_TYPES: any;
  private OTHER_MEDICAL_PROFESSIONAL_TYPES: any;
  private COUNSELLOR_TYPES: any;

  constructor(
      private router: Router,
      private dataStore: DataStoreService,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    this.CONSULTANT_TYPES = JSON.parse(this.dataHandlerService.loadConfig('CONSULTANT_TYPES'));
    this.OTHER_MEDICAL_PROFESSIONAL_TYPES = JSON.parse(this.dataHandlerService.loadConfig('OTHER_MEDICAL_PROFESSIONAL_TYPES'));
    this.COUNSELLOR_TYPES = JSON.parse(this.dataHandlerService.loadConfig('COUNSELLOR_TYPES'));

    sessionStorage.removeItem(LocalStorageKeys.selectedProfessionalUserId);
    this.regions = csc.getStatesOfCountry(this.country);
  }

  search() {
    this.professionalList = [];
    if (!((this.searchString && this.searchString !== '')
        || (this.selectedCategory && this.selectedCategory !== '' && this.selectedCategory !== 'Any'))) {
      this.error = true;
    } else {
      this.error = false;
      this.PAGINATION_START = 0;
      this.PAGINATION_END = this.RESULTS_PER_PAGE;
      if (
          !this.searchString &&
          !this.selectedCategory &&
          !this.selectedSpecialization
      ) {
        //
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
        const url = Constants.API_BASE_URL + Constants.PROFESSIONAL_SEARCH;
        let httpParams = new HttpParams();
        if (this.searchString) {
          httpParams = httpParams.append('name', this.searchString);
        }
        if (this.selectedCategory) {
          httpParams = httpParams.append('professionalType', this.selectedCategory);
        }
        if (this.selectedSpecialization && this.selectedSpecialization !== 'Any') {
          httpParams = httpParams.append('specialization', this.selectedSpecialization);
        }
        this.dataLoaderService.get<UserData>(url, httpParams, new HttpHeaders())
            .then((data: any) => {
              if (data && data.status && data.status.code === 1) {
                this.professionalList = data.data[0];
              }
            });
      }
    }
  }

  selectProfessional($event: any) {
    this.PAGINATION_START = 0;
    this.PAGINATION_END = this.RESULTS_PER_PAGE;
    sessionStorage.setItem(LocalStorageKeys.selectedProfessionalUserId, $event.userId);
    // sessionStorage.setItem(LocalStorageKeys.selectedProfessional, JSON.stringify($event));
    this.router.navigate(['appointmentTime']).then(r => {
    });
  }

  goToPage($event: PageEvent) {
    this.PAGINATION_START = $event.pageIndex * $event.pageSize;
    this.PAGINATION_END = this.PAGINATION_START + $event.pageSize;
  }

  selectCategory($event) {
    this.selectedSpecialization = null;
    this.selectedCategory = $event.value;
    switch (this.selectedCategory) {
      case DoctorType.CON:
        this.specializations = ['Any'];
        this.specializations = this.specializations.concat(this.CONSULTANT_TYPES);
        break;
      case DoctorType.COUN:
        this.specializations = ['Any'];
        this.specializations = this.specializations.concat(this.COUNSELLOR_TYPES);
        break;
      case DoctorType.OTH:
        this.specializations = ['Any'];
        this.specializations = this.specializations.concat(this.OTHER_MEDICAL_PROFESSIONAL_TYPES);
        break;
      default:
        this.specializations = [];
        break;
    }
  }
}
