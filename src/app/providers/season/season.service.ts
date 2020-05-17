import { Injectable } from '@angular/core';

import { Event } from '../../models/event'

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  private eventsCollection: AngularFirestoreCollection<Event>;

  constructor(
    private firestore: AngularFirestore
  ) {
    //this.eventsCollection = firestore.collection('events', ref => ref.where("currentSeason", "==", true).limit(1));
    this.eventsCollection = firestore.collection('events', ref => ref.where("currentSeason", "==", true));
  }

  getSeason():Observable<Event[]> {
    return this.eventsCollection.valueChanges();
  }

}
