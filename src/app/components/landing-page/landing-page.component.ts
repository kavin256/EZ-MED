import {Component, Inject, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnChanges {

  @Input() flow: number;
  @Output() emitFlowChange = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.flow && changes.flow.currentValue) {
      this.flow = changes.flow.currentValue;
    }
  }

  goToSearchPage() {
    this.router.navigate(['searchProfessionals']).then(r => {
    });
  }
}
