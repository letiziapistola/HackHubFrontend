import { Component, OnInit, signal } from '@angular/core';
import { Invite } from '../../models/invite';
import { InviteService } from '../../../core/services/invite.service';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';


@Component({
  selector: 'app-invite-card',
  imports: [TimeAgoPipe],
  templateUrl: './invite-card.html',
  styleUrl: './invite-card.scss',
})
export class InviteCard  implements OnInit {
  invites = signal<Invite[]>([]);

  constructor(private inviteService: InviteService) {}

  ngOnInit() {
    this.inviteService.getInvites().subscribe({
      next: (data) => this.invites.set(data),
      error: (error) => console.error('Error fetching invites:', error)
    });
  }
}
