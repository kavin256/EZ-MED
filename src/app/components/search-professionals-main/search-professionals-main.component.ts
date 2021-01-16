import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {specializations, Constants, DoctorType} from '../../utils/Constants';
import {DataHandlerService} from '../../services/data-handler.service';
import {UserData} from '../../models/user-data';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataStoreService, LocalStorageKeys} from '../../services/data-store.service';
import {DataLoaderService} from '../../services/data-loader.service';
import csc from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-search-professionals-main',
  templateUrl: './search-professionals-main.component.html',
  styleUrls: ['./search-professionals-main.component.css']
})
export class SearchProfessionalsMainComponent implements OnInit {

  searchString = null;
  professionalList = null;
  RESULTS_PER_PAGE = 10;
  PAGINATION_START = 0;
  PAGINATION_END = this.RESULTS_PER_PAGE;
  selectedCategory: any = null;
  selectedSpecialization: any = null;
  country = 'LK';
  selectedRegion: IState = null;
  selectedCity: ICity = null;

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

  specializations = specializations;
  regions;

  constructor(
      private router: Router,
      private dataStore: DataStoreService,
      private dataLoaderService: DataLoaderService,
      private dataHandlerService: DataHandlerService
  ) { }

  ngOnInit() {
    localStorage.removeItem(LocalStorageKeys.selectedProfessionalUsername);
    this.InitialSearch();
    // console.log(csc.getAllCountries());
    this.regions = csc.getStatesOfCountry(this.country);
    // console.log(csc.getStatesOfCountry(this.country));
    // console.log(csc.getCitiesOfState(this.country, '1'));
  }

  search() {
    this.PAGINATION_START = 0;
    this.PAGINATION_END = this.RESULTS_PER_PAGE;
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
              this.resetVariables();
              this.professionalList = data.data[0];
            } else if (data && data.status && data.status.code === -1) {
              this.resetVariables();
            }
          });
    }
  }

  private resetVariables() {
    this.professionalList = [];
    this.selectedCategory = null;
    this.selectedSpecialization = null;
  }

  selectProfessional($event: any) {
    this.PAGINATION_START = 0;
    this.PAGINATION_END = this.RESULTS_PER_PAGE;
    localStorage.setItem(LocalStorageKeys.selectedProfessionalUsername, $event.userName);
    // localStorage.setItem(LocalStorageKeys.selectedProfessional, JSON.stringify($event));
    this.router.navigate(['appointmentTime']).then(r => {
    });
  }

  goToPage($event: PageEvent) {
    this.PAGINATION_START = $event.pageIndex * $event.pageSize;
    this.PAGINATION_END = this.PAGINATION_START + $event.pageSize;
  }

  private InitialSearch() {
    // todo: uncomment
  }

  filterProvinces(regions: any []) {
    regions = regions.filter((region) => {
      return region.name.match(/Province/g);
    });
    return regions;
  }

  getCities(selectedRegion) {
    if (selectedRegion) {
      return csc.getCitiesOfState(this.country, selectedRegion);
    }
  }
}
