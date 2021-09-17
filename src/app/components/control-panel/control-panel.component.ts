import {Component, OnInit} from '@angular/core';
import {Prescription} from '../../models/prescription';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {ConfigModel} from '../../models/config';
import {Constants, DoctorTitles, DoctorType} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';
import {DataEncryptionService} from '../../services/data-encryption.service';
import {PricingRule} from '../../models/pricing-rule';
import {UserData} from '../../models/user-data';
import {DataHandlerService} from '../../services/data-handler.service';
import {DataKey} from '../../services/data-store.service';

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
    dpeUserData: UserData;
    selectedImage: File;
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
    titles = [
        {value: DoctorTitles.DR},
        {value: DoctorTitles.MR},
        {value: DoctorTitles.MRS},
        {value: DoctorTitles.MS},
        {value: DoctorTitles.PROF},
    ];
    specializations;
    selectedSpecialization: any = null;
    selectedCategory: any = null;
    CONSULTANT_TYPES: any;
    OTHER_MEDICAL_PROFESSIONAL_TYPES: any;
    COUNSELLOR_TYPES: any;
    priceCurrency = 'LKR';
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
            category: DoctorType.AYUR
        },
        {
            category: DoctorType.OTH
        }
    ];

    constructor(
        public dataHandlerService: DataHandlerService,
        public dataLoaderService: DataLoaderService,
        public https: HttpClient,
        public dataEncryptionService: DataEncryptionService,
    ) {
    }

    ngOnInit() {
        this.getTheCounts();
        this.CONSULTANT_TYPES = JSON.parse(this.dataHandlerService.loadConfig('CONSULTANT_TYPES'));
        this.OTHER_MEDICAL_PROFESSIONAL_TYPES = JSON.parse(this.dataHandlerService.loadConfig('OTHER_MEDICAL_PROFESSIONAL_TYPES'));
        this.COUNSELLOR_TYPES = JSON.parse(this.dataHandlerService.loadConfig('COUNSELLOR_TYPES'));
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
            this.dpeUserData = null;
            const url = Constants.API_BASE_URL + Constants.GET_USER_DATA + this.email;
            this.dataLoaderService.get<UserData>(url, new HttpParams(), new HttpHeaders())
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1) {
                        this.dpeUserData = data.data[0];
                        this.profileImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_PROFILE_PIC + this.dpeUserData.userId;
                        this.signatureImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_SIGN + this.dpeUserData.userId;
                        this.stampImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_STAMP + this.dpeUserData.userId;

                        // converting professionalType to a user friendly readable format
                        if (this.dpeUserData && this.dpeUserData.professionalType) {
                            this.selectedCategory = this.dataHandlerService.convertProfessionalTypeFromDBFormat(
                                JSON.parse(JSON.stringify(this.dpeUserData.professionalType)));
                            this.selectCategory({value: this.selectedCategory});
                        }
                    } else if (data && data.status && data.status.code === -1) {
                    }
                });
        }
    }

    selectCategory($event) {
        this.selectedSpecialization = null;
        this.selectedCategory = $event.value;
        switch (this.selectedCategory) {
            case DoctorType.CON:
                this.specializations = [];
                this.specializations = this.specializations.concat(this.CONSULTANT_TYPES);
                break;
            case DoctorType.COUN:
                this.specializations = [];
                this.specializations = this.specializations.concat(this.COUNSELLOR_TYPES);
                break;
            case DoctorType.OTH:
                this.specializations = [];
                this.specializations = this.specializations.concat(this.OTHER_MEDICAL_PROFESSIONAL_TYPES);
                break;
            default:
                this.specializations = [];
                break;
        }
    }

    saveData() {
        if (this.selectedCategory &&
            this.dpeUserData.priceForAppointment &&
            parseInt(this.dpeUserData.priceForAppointment, 10) > 0) {

            // converting professionalType to a database readable format
            if (this.selectedCategory) {
                this.dpeUserData.professionalType = this.dataHandlerService.convertProfessionalTypeToDBFormat(
                    JSON.parse(JSON.stringify(this.selectedCategory)));
            }
            const url = Constants.API_BASE_URL + Constants.UPDATE_USER_SPECIFIC_DATA + this.dpeUserData.userId;
            this.dataLoaderService.put<UserData>(url, new HttpParams(), new HttpHeaders(), DataKey.uploadImage, this.dpeUserData)
                .then((data: any) => {
                    if (data && data.status && data.status.code === 1) {
                        alert('User addition is successful');
                    }
                });
        } else if (parseInt(this.dpeUserData.priceForAppointment, 10) <= 0) {
            alert('Price per consultation should be more than LKR 0');
        } else {
            alert('Please fill mandatory fields.');
        }
    }

    /**
     * Upload user image handling
     * @param event selected image
     */
    uploadImage(event) {
        this.selectedImage = event.target.files[0];
        const formData: FormData = new FormData();
        formData.append('file', this.selectedImage);

        // sent request
        const url = Constants.API_BASE_URL + Constants.UPLOAD_USER_PROFILE_PIC + this.dpeUserData.userId;
        const req = new HttpRequest('POST', url, formData, {
            reportProgress: true,
            responseType: 'json'
        });
        this.https.request(req).subscribe(
            data => {
                if (data) {
                }
            }
        );
    }

    /**
     * Upload user image handling
     * @param event selected image
     */
    uploadSignature(event) {
        this.selectedImage = event.target.files[0];
        const formData: FormData = new FormData();
        formData.append('file', this.selectedImage);

        // sent request
        const url = Constants.API_BASE_URL + Constants.UPLOAD_USER_SIGN + this.dpeUserData.userId;
        const req = new HttpRequest('POST', url, formData, {
            reportProgress: true,
            responseType: 'json'
        });
        this.https.request(req).subscribe(
            data => {
                if (data) {
                }
            }
        );
    }

    /**
     * Upload user image handling
     * @param event selected image
     */
    uploadStamp(event) {
        this.selectedImage = event.target.files[0];
        const formData: FormData = new FormData();
        formData.append('file', this.selectedImage);

        // sent request
        const url = Constants.API_BASE_URL + Constants.UPLOAD_USER_STAMP + this.dpeUserData.userId;
        const req = new HttpRequest('POST', url, formData, {
            reportProgress: true,
            responseType: 'json'
        });
        this.https.request(req).subscribe(
            data => {
                if (data) {
                }
            }
        );
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
        return true;
        // return this.unlockPW === '1243';
    }
}
