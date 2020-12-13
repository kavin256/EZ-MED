import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent implements OnInit {

  @Input() messageThread;
  @Input() patientName;

  constructor() { }

  ngOnInit() {
  }

}
