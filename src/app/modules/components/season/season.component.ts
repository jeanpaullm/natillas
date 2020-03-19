import { Component, OnInit } from '@angular/core';

import { Season } from '../../../models/season';
import { SeasonService } from '../../../providers/season/season.service'

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  season:Season;
  displayedColumns1:string[] = ['food'];
  displayedColumns2:string[] = ['person'];

  constructor(
    private seasonService:SeasonService,
  ) { }

  ngOnInit(): void {
    this.getSeason();
  }

  getSeason(): void{
    this.seasonService.getSeason().subscribe(season => this.season = (season && (season.length) >= 1) ? season.pop() : this.season = null);
    //this.seasonService.getSeason().subscribe(season => this.season = season);
  }

}
