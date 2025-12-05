import { Component, effect } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { DataTransfer} from '../../../core/data-transfer/data-transfer';
import { GridList } from '../../../shared/components/grid-list/grid-list';
import { Dashboard } from "../dashboard/dashboard";

@Component({
  selector: 'app-home',
  imports: [RouterLink, GridList, RouterOutlet, Dashboard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  roleValue: any;

  constructor(private dataTransfer:DataTransfer){
    effect(() => {
      this.roleValue = this.dataTransfer.roleSource();
    });
  }
}
