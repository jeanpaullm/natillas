import { Injectable } from '@angular/core';

import { Event } from '../../models/event';

import { Observable } from 'rxjs';
import { AngularFirestore,  AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private eventsCollection: AngularFirestoreCollection<Event>;

  constructor(
    private firestore: AngularFirestore
  ) {
    this.eventsCollection = firestore.collection<Event>('events');
  }

  getHistory():Observable<Event[]> {
    return this.eventsCollection.valueChanges();
  }
}
