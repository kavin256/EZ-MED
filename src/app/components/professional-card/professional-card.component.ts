import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Constants, currencyCodes} from '../../utils/Constants';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-professional-card',
  templateUrl: './professional-card.component.html',
  styleUrls: ['./professional-card.component.css']
})
export class ProfessionalCardComponent implements OnInit {
  @Input() professional: any;
  @Output() selectProfessional: EventEmitter<any> = new EventEmitter<any>();

  overTheDoctorCard = null;
  currency = currencyCodes.LKR;
  profileImageURL = Constants.BASE_URL + Constants.DOWNLOAD_USER_IMAGE;

  constructor(
      private https: HttpClient
  ) { }

  ngOnInit() {
    this.setProfileImageSource();
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
    this.profileImageURL += this.professional.userName;

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
