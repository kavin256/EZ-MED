import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnChanges {

  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.flow && changes.flow.currentValue) {
      this.flow = changes.flow.currentValue;
    }
  }

  changeFlow($event) {
    this.flow = $event;
    this.emitFlowChange.emit($event);
  }
}
