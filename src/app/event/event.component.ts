import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { EventService } from '../event.service'


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventForm;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
  ) { 
    this.eventForm = this.formBuilder.group({
      person1: '',
      person2: '',
      food: '',
      date: '',
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
    })
    console.warn('Your order has been submitted', eventForm);
  } 

}
