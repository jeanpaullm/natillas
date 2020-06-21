import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  eventForm : FormGroup;
  startNewSeasonControl = new FormControl(false);

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private eventService: EventService,
  ) {
    this.eventForm = formBuilder.group({
      person1: '',
      person2: '',
      food: '',
      date: '',
      startNewSeason: this.startNewSeasonControl,
    });
  }

  ngOnInit(): void {}

  toggleStartNewSeason():void {
    console.log(`startNewSeason: ${this.startNewSeasonControl.value}`);
    if (this.startNewSeasonControl.value == false) {
      //dialogo
      const dialogRef = this.dialog.open(StartNewSeasonDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        if(result === undefined || result == false) {
          this.startNewSeasonControl.setValue(false);
        }
        console.log(`Dialog result: ${this.startNewSeasonControl.value}`);
      });
    }
  }

  onSubmit(eventForm):void {
    this.eventService.createEvent(eventForm).then(res => {
      this.startNewSeasonControl.setValue(false);
      this.eventForm.patchValue({
              person1: '',
              person2: '',
              food: '',
              date: ''
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
