import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Constants, currencyCodes} from '../../utils/Constants';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {UserData} from '../../models/user-data';

@Component({
  selector: 'app-professional-card',
  templateUrl: './professional-card.component.html',
  styleUrls: ['./professional-card.component.css']
})
export class ProfessionalCardComponent implements OnInit, OnChanges {
  @Input() professional: UserData;
  @Output() selectProfessional: EventEmitter<any> = new EventEmitter<any>();

  overTheDoctorCard = null;
  currency = currencyCodes.LKR;
  profileImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_IMAGE;

  constructor(
      private https: HttpClient
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.professional && changes.professional.currentValue) {
      this.setProfileImageSource();
    }
  }

  onMouseEnter($event: number) {
    this.overTheDoctorCard = $event;
  }

  onMouseLeave() {
    this.overTheDoctorCard = null;
  }

  isOverTheDoctorCard($event: number) {
    return $event === this.overTheDoctorCard;
  }

  selectProfessional_($event: any) {
    this.selectProfessional.emit($event);
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
        data => {},
        error => {
          if (error.status !== 200) {
            this.profileImageURL = './assets/img/profile_blue1.png';
          }
        });
    }
}
