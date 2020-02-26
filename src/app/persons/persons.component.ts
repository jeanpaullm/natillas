import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service'

import { Person } from '../person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit {

  displayedColumns: string[] = ['person', 'participations'];
  dataSource: Person[];

  constructor(
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void{
    this.personService.getPersons().subscribe(persons => this.dataSource = persons)
  }

}
