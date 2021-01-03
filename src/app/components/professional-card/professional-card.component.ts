import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {currencyCodes} from '../../utils/Constants';

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

  constructor() { }

  ngOnInit() {}

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
}
