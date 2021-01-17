import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
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
      private dialogRef: MatDialogRef<ModalComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
    this.modalType = data.modalType;
  }

  ngOnInit() {
  }

  startVacationMode() {
    this.dialogRef.close('start_vacation');
  }

  stopVacationMode() {
    this.dialogRef.close('stop_vacation');
  }

  dismiss() {
    this.dialogRef.close('dismiss');
  }
}
