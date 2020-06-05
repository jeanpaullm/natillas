import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { EventService } from '../../../providers/event/event.service'

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventForm;

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private eventService: EventService,
  ) {
    this.eventForm = this.formBuilder.group({
      person1: '',
      person2: '',
      food: '',
      date: '',
      startNewSeason: '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(eventForm):void {
    this.eventService.createEvent(eventForm).then(res => {
      this.eventForm.reset();
    })
    .catch(error => {
      console.log('Error adding: ', error);
      this.snackBar.open('No fue posible crear el evento', '', {
        duration: 3000,
      });
    })

    console.warn('Your order has been submitted', eventForm);

    this.snackBar.open('El evento se ha creado', '', {
      duration: 3000,
    });

  }

}
