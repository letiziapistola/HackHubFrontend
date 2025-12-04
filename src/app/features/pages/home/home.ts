import { Component } from '@angular/core';
import { Auth } from '../../../core/auth/auth';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(protected auth: Auth) {}

  getRole() {
    return this.auth.role();
  }

  getUser() {
    return this.auth.user();
  }

  hasPermission(permission: string) {
    return this.auth.hasPermission(permission as any);
  }
}
