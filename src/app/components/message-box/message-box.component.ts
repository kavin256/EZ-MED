import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
    @Input() display = true;
    @Input() title: string;
    @Input() messageContent: string;
    @Input() doctorSide: boolean;
    @Output() closeMessage = new EventEmitter();
    @Output() approve = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    approveMessage() {
        this.approve.emit();
    }
}
