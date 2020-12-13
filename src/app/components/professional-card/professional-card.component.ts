import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-professional-card',
  templateUrl: './professional-card.component.html',
  styleUrls: ['./professional-card.component.css']
})
export class ProfessionalCardComponent implements OnInit {
  @Input() professional: any;
  @Output() selectProfessional: EventEmitter<number> = new EventEmitter<number>();

  overTheDoctorCard = null;

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

  selectProfessional_($event: number) {
    this.selectProfessional.emit($event);
  }
}
