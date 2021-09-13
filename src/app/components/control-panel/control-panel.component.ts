import {Component, OnInit} from '@angular/core';
import {Prescription} from '../../models/prescription';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {ConfigModel} from '../../models/config';
import {Constants} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';
import {DataEncryptionService} from '../../services/data-encryption.service';
import {PricingRule} from '../../models/pricing-rule';
import {UserData} from '../../models/user-data';

@Component({
    selector: 'app-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
    visibleSection = '';
    code = '';
    pricingRule: PricingRule = new PricingRule();
    pricingRules: PricingRule [] = [];
    dpdObj: UserData;
    desc = '';
    profileImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_PROFILE_PIC;
    signatureImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_SIGN;
    stampImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_STAMP;
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

    loadPricingRules() {
        if (this.isUnlocked()) {
            // create url and send request
            const url = Constants.API_BASE_URL + Constants.PRICING_MARGINS;
            this.dataLoaderService.get<Prescription>(url, new HttpParams(), new HttpHeaders())
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        this.pricingRules = data.data[0] as PricingRule [];
                        this.pricingRules.forEach(x => x.controlRules = JSON.stringify(x.controlRules));
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

    loadPricingRule() {
        if (this.isUnlocked()) {
            // create url and send request
            const url = Constants.API_BASE_URL + Constants.PRICING_RULE + '/' + this.pricingRule.code;
            this.dataLoaderService.get<Prescription>(url, new HttpParams(), new HttpHeaders())
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        this.pricingRule = data.data[0];
                        this.pricingRule.controlRules = JSON.stringify(this.pricingRule.controlRules);
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

    loadProfessionalProfile() {
        if (this.isUnlocked()) {

            // create url and send request
            const url = Constants.API_BASE_URL + Constants.GET_USER_DATA + this.email;
            this.dataLoaderService.get<Prescription>(url, new HttpParams(), new HttpHeaders())
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        this.dpdObj = data.data[0];

                        // load profile pic
                        this.profileImageURL += this.dpdObj.userId;
                        // load signature Image URL pic
                        this.signatureImageURL += this.dpdObj.userId;
                        // load stamp Image URL pic
                        this.stampImageURL += this.dpdObj.userId;

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

    addNewPricingRule() {
        if (this.isUnlocked()) {
            // create url and send request
            const pricingRuleObj = JSON.parse(JSON.stringify(this.pricingRule));
            pricingRuleObj.controlRules = JSON.parse(pricingRuleObj.controlRules);
            const url = Constants.API_BASE_URL + Constants.PRICING_RULE;
            this.dataLoaderService.post<Prescription>(url, new HttpParams(), new HttpHeaders(), null, pricingRuleObj)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        this.pricingRule = data.data[0];
                        this.pricingRule.controlRules = JSON.stringify(this.pricingRule.controlRules);
                        alert(data.status.message);
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

    updatePricingRule() {
        if (this.isUnlocked()) {
            // create url and send request
            const pricingRuleObj = JSON.parse(JSON.stringify(this.pricingRule));
            pricingRuleObj.controlRules = JSON.parse(pricingRuleObj.controlRules);
            const url = Constants.API_BASE_URL + Constants.PRICING_RULE;
            this.dataLoaderService.put<Prescription>(url, new HttpParams(), new HttpHeaders(), null, pricingRuleObj)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                        this.pricingRule = data.data[0];
                        this.pricingRule.controlRules = JSON.stringify(this.pricingRule.controlRules);
                        alert(data.status.message);
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

    deletePricingRule() {
        if (this.isUnlocked()) {
            // create url and send request
            const url = Constants.API_BASE_URL + Constants.PRICING_RULE + '/' + this.pricingRule.code;
            this.dataLoaderService.delete<Prescription>(url, new HttpParams(), new HttpHeaders(), null)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1) {
                        alert(data.status.message);
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
                    if (data && data.status && data.status.code === 1) {
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
            const url = Constants.API_BASE_URL + Constants.PW_CHANGE + this.email;
            this.dataLoaderService.put<Prescription>(url, new HttpParams(), new HttpHeaders(), null, encrypted)
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
