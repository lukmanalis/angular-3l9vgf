import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css'],
})
export class ChildCompComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  eventingWishes = 'Good Evening , Take care ..';

  @Input() myData: string;
  @Output() myEvent = new EventEmitter();

  @Input() parentDataReceived: string;
  @Output() sendDataToParentEvent = new EventEmitter();
  sendDataToParent = '';

  passData() {
    debugger;

    this.myEvent.emit(this.eventingWishes);
  }

  onKeypressEvent(event: any) {
    debugger;
    this.sendDataToParentEvent.emit(this.sendDataToParent);
  }
}
