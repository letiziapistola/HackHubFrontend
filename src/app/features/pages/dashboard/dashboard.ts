import { Component, effect } from '@angular/core';
import { DataTransfer } from '../../../core/data-transfer/data-transfer';
import { InviteCard } from '../../../shared/components/invite-card/invite-card';

@Component({
  selector: 'app-dashboard',
  imports: [InviteCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  roleValue: any;

  constructor(private dataTransfer:DataTransfer) {
    effect(() => {
      this.roleValue = this.dataTransfer.roleSource();
    });
  }
}
