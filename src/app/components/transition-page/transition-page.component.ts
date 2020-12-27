import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-transition-page',
  templateUrl: './transition-page.component.html',
  styleUrls: ['./transition-page.component.css']
})
export class TransitionPageComponent implements OnInit {
  @Input() modalType;
  @Input() dismissible = true;
  @Output() clickEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  logIn() {
    // this.router.navigate(['signup']).then(r => {
    // });
    this.clickEmitter.emit('logIn');
  }

  dismiss() {
    this.clickEmitter.emit('back');
  }
}
