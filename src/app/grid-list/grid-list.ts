import { Component } from '@angular/core';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { HackathonCard } from "../hackathon-card/hackathon-card";

@Component({
  selector: 'app-grid-list',
  imports: [MatGridListModule, MatGridTile, HackathonCard],
  templateUrl: './grid-list.html',
  styleUrl: './grid-list.scss',
})
export class GridList {

}
