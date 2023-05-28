import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TenantService } from 'src/app/shared/services/tenant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  tenantId = '';

  ngOnInit(): void {
      
  }

  constructor(
    private nav: NavController,
    private tenantService: TenantService
  ) {}

  login() {
    this.tenantService.setActiveTenant(this.tenantId);
    this.nav.navigateRoot(`/${this.tenantId}`, { animationDirection: 'forward' });
  }

}
