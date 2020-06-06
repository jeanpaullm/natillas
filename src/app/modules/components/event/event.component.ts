import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { EventService } from '../../../providers/event/event.service';
import { StartNewSeasonDialogComponent } from '../start-new-season-dialog/start-new-season-dialog.component';

import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventForm;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private eventService: EventService,
  ) {
    this.eventForm = this.formBuilder.group({
      person1: '',
      person2: '',
      food: '',
      date: '',
      startNewSeason: false,
    });
  }

  ngOnInit(): void {

  }

  toggleStartNewSeason():void {
    console.log(`startNewSeason: ${this.eventForm.startNewSeason}`);
    if (this.eventForm.startNewSeason === undefined || this.eventForm.startNewSeason == false) {
      //dialogo
      const dialogRef = this.dialog.open(StartNewSeasonDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        this.eventForm.startNewSeason = result;
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  onSubmit(eventForm):void {
    this.eventService.createEvent(eventForm).then(res => {
      this.eventForm = this.formBuilder.group({
        person1: '',
        person2: '',
        food: '',
        date: '',
        startNewSeason: false,
      });
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
