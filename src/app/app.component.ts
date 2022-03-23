import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  morningWishes = 'Good Morning , How are you..';
  childWishData = '';
  sendDataToChild = '';
  childDataReceived = '';

  setChildData(data) {
    debugger;

    this.childWishData = data;
  }
  receiveChildData(data) {
    debugger;

    this.childDataReceived = data;
  }
}
