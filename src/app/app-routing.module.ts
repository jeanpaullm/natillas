import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HistoryComponent } from './modules/components/history/history.component';
import { PersonsComponent } from './modules/components/persons/persons.component';
import { SeasonComponent } from './modules/components/season/season.component';
import { EventComponent } from './modules/components/event/event.component';

const routes: Routes = [
  { path: '', redirectTo: 'season', pathMatch: 'full'},
  { path: 'season', component: SeasonComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'persons', component: PersonsComponent},
  { path: 'event', component: EventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
