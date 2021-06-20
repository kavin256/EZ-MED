import {Component, OnInit} from '@angular/core';
import {Prescription} from '../../models/prescription';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {ConfigModel} from '../../models/config';
import {Constants} from '../../utils/Constants';
import {DataLoaderService} from '../../services/data-loader.service';

@Component({
    selector: 'app-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
    visibleSection = '';
    code = '';
    desc = '';
    configValue = '';

    constructor(
        public dataLoaderService: DataLoaderService
    ) {
    }

    ngOnInit() {
    }

    addConfig() {
        const configModel = new ConfigModel();
        configModel.name = this.code;
        configModel.description = this.desc;
        configModel.value = this.configValue;

        // create url and send request
        const url = Constants.API_BASE_URL + Constants.LOAD_CONFIGURATIONS;
        this.dataLoaderService.post<Prescription>(url, new HttpParams(), new HttpHeaders(), null, configModel)
            .then((data: any) => {
                if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
                    console.log();
                } else if (data && data.status && data.status.code === -1) {
                    console.log(data);
                }
            });
    }
}
