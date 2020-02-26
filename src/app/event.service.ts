import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  public createEvent(data: any) {
    return this.firestore.collection('events').add(data);
  }
}
