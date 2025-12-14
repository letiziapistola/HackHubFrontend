import { Injectable, signal, computed, effect } from '@angular/core';
import { Auth } from '../auth/auth';

export interface Team {
  id: string;
  name: string;
  members: string[];
  leader: string;
}

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teamsSignal = signal<Team[]>([]);
  private allTeams: Team[] = [
    {
      id: '1',
      name: 'Supers',
      members: ['jamesT', 'aliceW', 'bobK'],
      leader: 'jamesT',
    },
    {
      id: '2',
      name: 'Innovators',
      members: ['marioR', 'saraL', 'tomH'],
      leader: 'marioR',
    },
    {
      id: '3',
      name: 'Code Warriors',
      members: ['lucaB', 'emmaC', 'noahD'],
      leader: 'lucaB',
    },
  ];

  userTeams = computed(() => this.teamsSignal());

  constructor(private auth: Auth) {
    // Quando l'utente cambia, aggiorna i team
    effect(() => {
      const user = this.auth.user();
      if (user) {
        this.loadUserTeams(user.username);
      } else {
        this.teamsSignal.set([]);
      }
    });
  }

  private loadUserTeams(username: string) {
    const teams = this.allTeams.filter(
      (team) =>
        team.members.includes(username) || team.leader === username
    );
    this.teamsSignal.set(teams);
  }
}
