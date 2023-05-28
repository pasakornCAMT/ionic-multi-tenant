import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { IonicModule } from '@ionic/angular';
import { Tanant1RoutingModule } from './tenant1-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Tenant1Page } from './tenant1.page';

@NgModule({
  declarations: [
    Tenant1Page,
    HomeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    Tanant1RoutingModule,
    SharedModule
  ]
})
export class Tenant1Module { }
