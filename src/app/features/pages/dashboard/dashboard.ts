import { Component, OnInit } from '@angular/core';
import { DataTransfer } from '../../../core/data-transfer/data-transfer';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  roleValue: any;
  selectedRole: any;

  constructor(private dataTransfer:DataTransfer) {}

  ngOnInit(): void{
    this.dataTransfer.currentSelectedRole.subscribe(role => {
      this.selectedRole = role;
      this.roleValue = this.selectedRole;
    })
  }
}
