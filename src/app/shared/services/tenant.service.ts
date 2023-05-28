import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

export interface TenantConfig {
  tenantId: string;
  apiUrl: string;
  // Other relevant API configuration properties
}

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private readonly TENANTS: TenantConfig[] = [
    { tenantId: 'tenant1', apiUrl: 'https://tenant1-api.com' },
    { tenantId: 'tenant2', apiUrl: 'https://tenant2-api.com' },
    // Add more tenants as needed
  ];
  private readonly ACTIVE_TENANT_KEY = 'activeTenant';

  constructor(private localStorageService: LocalStorageService) {}

  setActiveTenant(tenantId: string): void {
    this.localStorageService.setItem(this.ACTIVE_TENANT_KEY, tenantId);
  }

  getActiveTenant(): string {
    return this.localStorageService.getItem(this.ACTIVE_TENANT_KEY) || 'tenant1';
  }

  getTenantConfig(tenantId: string): TenantConfig | undefined {
    return this.TENANTS.find(tenant => tenant.tenantId === tenantId);
  }

  
}