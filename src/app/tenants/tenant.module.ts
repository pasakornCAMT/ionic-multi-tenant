import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tenant1',
    loadChildren: () => import('./tenant1/tenant1.module').then( m => m.Tenant1Module)
  },
  {
    path: ':tenantId',
    loadChildren: () => import('./_main/main.module').then( m => m.MainPageModule)
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class TenantModule {}
