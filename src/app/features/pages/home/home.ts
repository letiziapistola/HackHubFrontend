import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { DataTransfer} from '../../../core/data-transfer/data-transfer';
import { GridList } from '../../../shared/components/grid-list/grid-list';
import { Dashboard } from "../dashboard/dashboard";
import { Auth } from '../../../core/auth/auth';
import { Login } from '../login/login';

@Component({
  selector: 'app-home',
  imports: [RouterLink, GridList, RouterOutlet, Dashboard, Login],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected activePage = 'HOME';

  constructor(
    private dataTransfer: DataTransfer,
    public auth: Auth
  ) {}

  viewDashboard() {
    this.activePage = 'DASHBOARD';
  }

  viewHome() {
    this.activePage = 'HOME';
  }

  viewLogin() {
    this.activePage = 'LOGIN';
  }
}
