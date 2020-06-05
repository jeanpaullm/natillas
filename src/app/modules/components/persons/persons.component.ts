import { Component, OnInit } from '@angular/core';

import { Person } from '../../../models/person';
import { PersonService } from '../../../providers/person/person.service'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit {

  dataSource: Person[];
  displayedColumns: string[] = ['person', 'participations', 'currentSeason']; //displayed columns on mat table

  constructor(
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void{
    this.personService.getPersons().subscribe(
      persons => this.dataSource = persons
      .sort((a,b)=> (a.participations - b.participations)) //order persons by number of participations
      .sort((a,b)=> (a.currentSeason ? 1 : 0) - (b.currentSeason ? 1 : 0))); // then order persons by current season participation
  }

}
