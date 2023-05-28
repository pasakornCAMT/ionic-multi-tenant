import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Tenant1Page } from './tenant1.page';

const routes: Routes = [
    {
      path: '',
      component: Tenant1Page,
      children: [
        {
          path: 'home',
          component: HomeComponent
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tanant1RoutingModule {}
