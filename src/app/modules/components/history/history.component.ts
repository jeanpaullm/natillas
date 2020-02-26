import { Component, OnInit } from '@angular/core';

import { Event } from '../../../models/event';
import { HistoryService } from '../../../providers/history/history.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns: string[] = ['date', 'persons', 'food'];
  dataSource: Event[];

  constructor(
    private historyService: HistoryService,
  ) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(): void{
    this.historyService.getHistory().subscribe(events => this.dataSource = events)
  }

}
