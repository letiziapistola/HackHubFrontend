import { Component } from '@angular/core';
import { Card } from "../card/card";

@Component({
  selector: 'app-detail',
  imports: [Card],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail {
enrollTeam() {
throw new Error('Method not implemented.');
}
sendSubmission() {
throw new Error('Method not implemented.');
}
hackathon: any;
role(){
  return 'VISITOR';
}
}