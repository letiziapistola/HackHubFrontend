import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { GridList } from './shared/components/grid-list/grid-list';
import { DataTransfer } from './core/data-transfer/data-transfer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, GridList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hackhubFrontend');

  constructor(private dataTransfer: DataTransfer) { }

  selectedRole: any;
  
  setRole(role: string) {
    this.selectedRole = role;
    this.sendSelectedRole();
  }

  sendSelectedRole() {
    const role = this.selectedRole;
    this.dataTransfer.changeRole(role);
  }
}
