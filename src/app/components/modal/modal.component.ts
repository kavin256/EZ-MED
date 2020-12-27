import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalType;
  @Output() clickEmitter = new EventEmitter<string>();

  constructor(
      private router: Router,
      @Inject(MAT_DIALOG_DATA) data) {
    this.modalType = data.modalType;
  }

  ngOnInit() {
  }
}
