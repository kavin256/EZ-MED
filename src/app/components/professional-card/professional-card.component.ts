import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Constants, currencyCodes} from '../../utils/Constants';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {UserData} from '../../models/user-data';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
    selector: 'app-professional-card',
    templateUrl: './professional-card.component.html',
    styleUrls: ['./professional-card.component.css']
})
export class ProfessionalCardComponent implements OnInit, OnChanges {
    @Input() professional: UserData;
    @Input() index: number;
    @Input() selected: boolean;
    @Input() isSearch: boolean;
    @Input() chargeVisible = false;
    @Output() checkedEmit: EventEmitter<number> = new EventEmitter<number>();
    @Output() selectProfessional: EventEmitter<any> = new EventEmitter<any>();

    currency = currencyCodes.LKR;
    profileImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_PROFILE_PIC;

    constructor(
        public dataHandlerService: DataHandlerService,
        public https: HttpClient
    ) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.professional && changes.professional.currentValue) {
            this.setProfileImageSource();
        }
    }

    selectProfessional_(event: Event, professional: UserData) {
        event.stopPropagation();
        this.selectProfessional.emit(professional);
    }

    checkCard() {
        this.checkedEmit.emit(this.selected ? -1 : this.index);
    }

    /**
     * Set profile image source. If there is no image, set default avatar
     */
    setProfileImageSource() {
        this.profileImageURL += this.professional.userId;

        // get image and verify that it is in the storage
        const req = new HttpRequest('GET', this.profileImageURL, {
            reportProgress: true
        });
        this.https.request(req).subscribe(
            data => {
            },
            error => {
                if (error.status !== 200) {
                    this.profileImageURL = './assets/img/profile_blue1.png';
                }
            });
    }
}
