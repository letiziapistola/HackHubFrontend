import { Component, effect } from '@angular/core';
import { DataTransfer } from '../../../core/data-transfer/data-transfer';
import { InviteTeamCard } from '../../../shared/components/invite-team-card/invite-team-card';
import { InviteStaffCard } from '../../../shared/components/invite-staff-card/invite-staff-card';

@Component({
  selector: 'app-dashboard',
  imports: [InviteTeamCard, InviteStaffCard],
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
