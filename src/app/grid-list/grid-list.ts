import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { HackathonCard } from "../hackathon-card/hackathon-card";

@Component({
  selector: 'app-grid-list',
  imports: [MatGridListModule, MatGridTile, HackathonCard],
  templateUrl: './grid-list.html',
  styleUrl: './grid-list.scss',
})
export class GridList implements OnInit {
  protected cols = 3;
  protected rowHeight = '2:1';
  protected numTiles = 4;
  protected hackathonName = "Example name";
  protected hackathonState = "Example state";
  protected hackathonDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  cards = Array.from({length: this.numTiles}, (_) => ({
    title: this.hackathonName,
    description: this.hackathonDescription,
    state: this.hackathonState
  }))

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.cols = result.matches ? 1 : 3;
      });
  }
}
