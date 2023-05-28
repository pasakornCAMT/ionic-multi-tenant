import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant1',
  template: `
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-icon name="home"></ion-icon>
        Home
      </ion-tab-button>
      <ion-tab-button tab="setting">
        <ion-icon name="settings"></ion-icon>
        Setting
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
  `,
})
export class Tenant1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
