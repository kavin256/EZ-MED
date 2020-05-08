import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import './signup.component.css';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();
  hide = true;

  constructor() { }

  ngOnInit() {
  }

  changeFlow($event) {
    this.flow = $event;
    this.emitFlowChange.emit($event);
  }
}
