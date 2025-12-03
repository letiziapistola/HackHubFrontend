import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hackathon-card',
  imports: [],
  templateUrl: './hackathon-card.html',
  styleUrl: './hackathon-card.scss',
})
export class HackathonCard {
  @Input() data!: {
    title: string;
    description: string;
    state: string;
  };
}
