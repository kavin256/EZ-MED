import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { specializations, Constants, DoctorType } from '../../utils/Constants';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { DataKey } from '../../services/data-store.service';
let SearchProfessionalsMainComponent = class SearchProfessionalsMainComponent {
    constructor(router, dataStore, dataLoaderService, dataHandlerService) {
        this.router = router;
        this.dataStore = dataStore;
        this.dataLoaderService = dataLoaderService;
        this.dataHandlerService = dataHandlerService;
        this.searchString = null;
        this.professionalList = null;
        this.RESULTS_PER_PAGE = 10;
        this.PAGINATION_START = 0;
        this.PAGINATION_END = this.RESULTS_PER_PAGE;
        this.selectedCategory = null;
        this.selectedSpecialization = null;
        this.categories = [
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
        this.specializations = specializations;
    }
    ngOnInit() {
        this.InitialSearch();
    }
    search(searchString, selectedCategory, selectedSpecialization) {
        this.PAGINATION_START = 0;
        this.PAGINATION_END = this.RESULTS_PER_PAGE;
        if (!this.searchString &&
            !this.selectedCategory &&
            !this.selectedSpecialization) {
            this.InitialSearch();
        }
        else {
            // General Practitioners don't have a specialization
            if (this.selectedCategory === DoctorType.GEN) {
                this.selectedSpecialization = null;
            }
            // converting professionalType to a database readable format
            if (this.selectedCategory) {
                this.selectedCategory = this.dataHandlerService.convertProfessionalTypeToDBFormat(JSON.parse(JSON.stringify(this.selectedCategory)));
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
            this.dataLoaderService.get(url, httpParams, new HttpHeaders())
                .then((data) => {
                if (data && data.status && data.status.code === 1) {
                    this.resetVariables();
                    this.professionalList = data.data[0];
                }
                else if (data && data.status && data.status.code === -1) {
                    this.resetVariables();
                }
            });
        }
    }
    resetVariables() {
        this.professionalList = [];
        // this.searchString = null;
        this.selectedCategory = null;
        this.selectedSpecialization = null;
    }
    selectProfessional($event) {
        this.PAGINATION_START = 0;
        this.PAGINATION_END = this.RESULTS_PER_PAGE;
        this.loadProfessionalData($event);
        this.router.navigate(['appointmentTime']).then(r => {
        });
    }
    goToPage($event) {
        this.PAGINATION_START = $event.pageIndex * $event.pageSize;
        this.PAGINATION_END = this.PAGINATION_START + $event.pageSize;
    }
    loadProfessionalData($event) {
        // create url and send request
        const url = Constants.BASE_URL + Constants.AVAILABLE_APPOINTMENTS_FOR_A_PROFESSIONAL + $event;
        this.dataLoaderService.get(url, new HttpParams(), new HttpHeaders())
            .then((data) => {
            if (data && data.status && data.status.code === 1) {
                this.dataStore.set(DataKey.availableAppointmentsForProfessional, data.data[0]);
            }
            else if (data && data.status && data.status.code === -1) {
                this.dataStore.set(DataKey.availableAppointmentsForProfessional, null);
            }
        });
    }
    InitialSearch() {
        // todo: uncomment
        // this.search(null, null, null);
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
};
SearchProfessionalsMainComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-professionals-main',
        templateUrl: './search-professionals-main.component.html',
        styleUrls: ['./search-professionals-main.component.css']
    })
], SearchProfessionalsMainComponent);
export { SearchProfessionalsMainComponent };
//# sourceMappingURL=search-professionals-main.component.js.map