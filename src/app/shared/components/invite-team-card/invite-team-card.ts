import { Component, OnInit, signal } from '@angular/core';
import { Invite } from '../../models/invite';
import { InviteService } from '../../../core/services/invite.service';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';


@Component({
  selector: 'app-invite-team-card',
  imports: [TimeAgoPipe],
  templateUrl: './invite-team-card.html',
  styleUrl: './invite-team-card.scss',
})
export class InviteTeamCard  implements OnInit {
  invites = signal<Invite[]>([]);

  constructor(private inviteService: InviteService) {}

  ngOnInit() {
    this.inviteService.getInvites().subscribe({
      next: (data) => this.invites.set(data.filter(inv => inv.type === 'TEAM')),
      error: (error) => console.error('Error fetching invites:', error)
    });
  }
}
