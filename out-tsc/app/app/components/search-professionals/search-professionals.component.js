import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DoctorType } from '../../utils/Constants';
let SearchProfessionalsComponent = class SearchProfessionalsComponent {
    constructor() {
        this.professionalListType = DoctorType.CON;
        this.selectedProfessionalType = 'option2';
        this.searchString = null;
        this.professionalList = [
            {
                id: 1,
                name: 'Dr. Nuwan Chinthaka',
                professionalType: DoctorType.CON,
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
                professionalType: DoctorType.CON,
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
                professionalType: DoctorType.CON,
                bio: 'MBBS [RUHUNA](2000)',
                specialities: [
                    'Consultant Clinical Nutritionist'
                ],
                consultationPrice: 'Rs. 2500.00',
                isSkypePreferred: false,
                isWhatsAppPreferred: true
            }
        ];
        this.specializations = [];
    }
    ngOnInit() {
    }
    selectDoc($event) {
        console.log($event);
    }
    search() {
        console.log('jhbrch');
    }
};
SearchProfessionalsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-professionals',
        templateUrl: './search-professionals.component.html',
        styleUrls: ['./search-professionals.component.css']
    })
], SearchProfessionalsComponent);
export { SearchProfessionalsComponent };
//# sourceMappingURL=search-professionals.component.js.map