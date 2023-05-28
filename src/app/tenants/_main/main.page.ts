import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-icon name="home"></ion-icon>
        Home
      </ion-tab-button>
      <ion-tab-button tab="profile">
        <ion-icon name="person-circle"></ion-icon>
        Profile
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
  `
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
