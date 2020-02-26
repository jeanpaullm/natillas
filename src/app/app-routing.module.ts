import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HistoryComponent } from './history/history.component';
import { PersonsComponent } from './persons/persons.component';
import { EventComponent } from './event/event.component';


const routes: Routes = [
  { path: 'history', component: HistoryComponent},
  { path: 'persons', component: PersonsComponent},
  { path: 'event', component: EventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
