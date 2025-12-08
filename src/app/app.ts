import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { GridList } from './shared/components/grid-list/grid-list';
import { DataTransfer } from './core/data-transfer/data-transfer';
import { R } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, GridList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hackhubFrontend');


  constructor(private dataTransfer: DataTransfer) { }
  
  setRole(role: string) {
    this.dataTransfer.changeRole(role);
  }
}
