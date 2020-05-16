import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-body',
  templateUrl: './common-body.component.html',
  styleUrls: ['./common-body.component.css']
})
export class CommonBodyComponent implements OnInit {

  flow = 6;

  constructor() { }

  ngOnInit() {
  }

  onFlowChange($event) {
    this.flow = $event;
  }

}
