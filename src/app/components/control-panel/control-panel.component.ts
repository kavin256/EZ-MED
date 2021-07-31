import {Component, OnInit} from '@angular/core';
import {Prescription} from '../../models/prescription';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {ConfigModel} from '../../models/config';
import {Constants} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';
import {DataEncryptionService} from '../../services/data-encryption.service';

@Component({
    selector: 'app-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
    visibleSection = '';
    code = '';
    pCode = '';
    pDescription = '';
    pIsPublic = '';
    pValidTo = '';
    pValidFrom = '';
    pPriority = '';
    pRateType = '';
    pRate = '';
    pRuleType = '';
    pRules = '';
    promos = [];
    desc = '';
    configValue = '';
    email: string;
    newPW: string;
    id: string;
    editable: boolean;
    activated: boolean;
    bio = '';
    countA = 0;
    countB = 0;
    countC = 0;
    unlockPW = '';

    constructor(
        public dataLoaderService: DataLoaderService,
        public dataEncryptionService: DataEncryptionService,
    ) {
    }

    ngOnInit() {
        this.getTheCounts();
    }

    addConfig() {
        if (this.isUnlocked()) {
            const configModel = new ConfigModel();
            configModel.name = this.code;
            configModel.description = this.desc;
            configModel.value = this.configValue;

            // create url and send request
            const url = Constants.API_BASE_URL + Constants.CONFIGURATIONS;
            this.dataLoaderService.post<Prescription>(url, new HttpParams(), new HttpHeaders(), null, configModel)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        alert(data.status.message);
                    } else if (data && data.status && data.status.code === -1) {
                        alert(data.status.message);
                    }
                });
        }
    }

    loadConfig() {
        if (this.isUnlocked()) {
            // create url and send request
            const url = Constants.API_BASE_URL + Constants.CONFIGURATIONS + '/' + this.code;
            this.dataLoaderService.get<Prescription>(url, new HttpParams(), new HttpHeaders())
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        this.desc = data.data[0].description;
                        this.configValue = data.data[0].value;
                    } else if (data && data.status && data.status.code === -1) {
                        alert(data.status.message);
                    }
                }).catch((data: any) => {
                if (data && data.error && data.error.status) {
                    alert(data.error.status.message);
                }
            });
        }
    }

    loadPromoCodes() {
        if (this.isUnlocked()) {
            this.promos = [
                {
                    code: 'CODEGEN_10',
                    validFrom: '2021-04-02',
                    validTo: '2021-08-02',
                    rate: '10',
                    rules: 'rul'
                },
                {
                    code: 'CODEGEN_10',
                    validFrom: '2021-04-02',
                    validTo: '2021-08-02',
                    rate: '10',
                    rules: 'rul'
                },
                {
                    code: 'CODEGEN_10',
                    validFrom: '2021-04-02',
                    validTo: '2021-08-02',
                    rate: '10',
                    rules: 'rul'
                }
            ];
            // // create url and send request
            // const url = Constants.API_BASE_URL + Constants.CONFIGURATIONS + '/' + this.code;
            // this.dataLoaderService.get<Prescription>(url, new HttpParams(), new HttpHeaders())
            //     .then((data: any) => {
            //         if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
            //             this.desc = data.data[0].description;
            //             this.configValue = data.data[0].value;
            //         } else if (data && data.status && data.status.code === -1) {
            //             alert(data.status.message);
            //         }
            //     }).catch((data: any) => {
            //     if (data && data.error && data.error.status) {
            //         alert(data.error.status.message);
            //     }
            // });
        }
    }

    loadPromoCode() {
        if (this.isUnlocked()) {
            // create url and send request
            const url = Constants.API_BASE_URL + Constants.PRICING_RULE + this.pCode;
            this.dataLoaderService.get<Prescription>(url, new HttpParams(), new HttpHeaders())
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        this.pDescription = data.data[0].description;
                        this.pIsPublic = data.data[0].isPublic;
                    } else if (data && data.status && data.status.code === -1) {
                        alert(data.status.message);
                    }
                }).catch((data: any) => {
                if (data && data.error && data.error.status) {
                    alert(data.error.status.message);
                }
            });
        }
    }

    savePromoCode() {
        if (this.isUnlocked()) {
            // // create url and send request
            // const url = Constants.API_BASE_URL + Constants.CONFIGURATIONS + '/' + this.code;
            // this.dataLoaderService.get<Prescription>(url, new HttpParams(), new HttpHeaders())
            //     .then((data: any) => {
            //         if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
            //             this.desc = data.data[0].description;
            //             this.configValue = data.data[0].value;
            //         } else if (data && data.status && data.status.code === -1) {
            //             alert(data.status.message);
            //         }
            //     }).catch((data: any) => {
            //     if (data && data.error && data.error.status) {
            //         alert(data.error.status.message);
            //     }
            // });
        }
    }

    getTheCounts() {
        // create url and send request
        const url = Constants.API_BASE_URL + Constants.COUNTS;
        this.dataLoaderService.get<Prescription>(url, new HttpParams(), new HttpHeaders())
            .then((data: any) => {
                if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                    this.countA = data.data[0].completedCount;
                    this.countB = data.data[0].notStartedCount;
                    this.countC = data.data[0].cancelledCount;
                } else if (data && data.status && data.status.code === -1) {
                    alert(data.status.message);
                }
            }).catch((data: any) => {
            if (data && data.error && data.error.status) {
                alert(data.error.status.message);
            }
        });
    }

    setEditableMode() {
        if (this.isUnlocked()) {
            // create url and send request
            const url = Constants.API_BASE_URL + Constants.EDITABLE_MODE + '/' + this.email + '/' + !!this.editable;
            this.dataLoaderService.put<Prescription>(url, new HttpParams(), new HttpHeaders(), null, null)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        alert(data.status.message);
                    } else if (data && data.status && data.status.code === -1) {
                        alert(data.status.message);
                    }
                });
        }
    }

    setProfileVisibility() {
        if (this.isUnlocked()) {
            // create url and send request
            const url = Constants.API_BASE_URL + Constants.PROFESSIONAL_VISIBILITY + this.email + '/' + !!this.activated;
            this.dataLoaderService.put<Prescription>(url, new HttpParams(), new HttpHeaders(), null, null)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        alert(data.status.message);
                    } else if (data && data.status && data.status.code === -1) {
                        alert(data.status.message);
                    }
                });
        }

    }

    setBio() {
        if (this.isUnlocked()) {
            // create url and send request
            const url = Constants.API_BASE_URL + Constants.PROFESSIONAL_BIO + '/' + this.email;
            this.dataLoaderService.put<Prescription>(url, new HttpParams(), new HttpHeaders(), null, this.bio)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1) {
                        alert(data.status.message);
                    } else if (data && data.status && data.status.code === -1) {
                        alert(data.status.message);
                    }
                });
        }
    }

    setPW() {
        if (this.isUnlocked()) {
            const encrypted = this.dataEncryptionService.set('123456$#@$^@1ERF', this.newPW.trim());

            // create url and send request
            const url = Constants.API_BASE_URL + Constants.PW_CHANGE + this.email + '/' + encrypted;
            this.dataLoaderService.put<Prescription>(url, new HttpParams(), new HttpHeaders(), null, null)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        alert(data.status.message);
                    } else if (data && data.status && data.status.code === -1) {
                        alert(data.status.message);
                    }
                });
        }
    }

    /**
     * deletes config when the config code is provided
     * todo: implemented in BE as well. But, NOT TESTED YET !!!
     */
    deleteConfig() {
        if (this.isUnlocked()) {
            let params = new HttpParams();
            params = params.append('code', this.code);

            // create url and send request
            const url = Constants.API_BASE_URL + Constants.CONFIGURATIONS;
            this.dataLoaderService.delete<Prescription>(url, params, new HttpHeaders(), null)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        alert(data.status.message);
                    } else if (data && data.status && data.status.code === -1) {
                        alert(data.status.message);
                    }
                });
        }
    }

    isUnlocked() {
        return this.unlockPW === '1243';
    }
}
