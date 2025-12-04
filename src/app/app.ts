import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { GridList } from './shared/components/grid-list/grid-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, GridList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hackhubFrontend');
}
