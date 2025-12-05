import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DataTransfer} from '../../../core/data-transfer/data-transfer';
import { GridList } from '../../../shared/components/grid-list/grid-list';

@Component({
  selector: 'app-home',
  imports: [RouterLink, GridList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{
  selectedRole: any;
  roleValue: any;

  constructor(private dataTransfer:DataTransfer){}

  ngOnInit(): void {
    this.dataTransfer.currentSelectedRole.subscribe(role => {
        this.selectedRole = role;
        this.roleValue = this.selectedRole;
    } );
  }
}
