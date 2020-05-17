import { Component, OnInit } from '@angular/core';

import { Event } from '../../../models/event';
import { SeasonService } from '../../../providers/season/season.service'

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  dataSource: Event[];
  displayedColumns: string[] = ['date', 'persons', 'food'];

/*
  season:Event;
  displayedColumns1:string[] = ['food'];
  displayedColumns2:string[] = ['person'];
*/
  constructor(
    private seasonService:SeasonService,
  ) { }

  ngOnInit(): void {
    this.getSeason();
  }

  getSeason(): void {
    //this.seasonService.getSeason().subscribe(season => this.season = (season && (season.length) >= 1) ? season.pop() : this.season = null);
    this.seasonService.getSeason().subscribe(season => this.dataSource = season);
    //this.seasonService.getSeason().subscribe(season => this.season = season);
  }

}
