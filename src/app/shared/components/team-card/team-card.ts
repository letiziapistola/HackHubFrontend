import { Component, effect } from '@angular/core';
import { DataTransfer } from '../../../core/data-transfer/data-transfer';
import { TeamService } from '../../../core/services/team.service';
import { Auth } from '../../../core/auth/auth';



@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.html',
  styleUrl: './team-card.scss',
})
export class TeamCard {
roleValue: any;
  userTeams: any;
  currentUser: any;

  constructor(
    private dataTransfer: DataTransfer,
    public teamService: TeamService,
    public auth: Auth
  ) {
    effect(() => {
      this.roleValue = this.dataTransfer.roleSource();
    });

    effect(() => {
      this.userTeams = this.teamService.userTeams();
    });

    effect(() => {
      this.currentUser = this.auth.user();
    });
  }
}
