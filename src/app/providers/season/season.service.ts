import { Injectable } from '@angular/core';

import { Season } from '../../models/season'

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  private seasonsCollection: AngularFirestoreCollection<Season>;

  constructor(
    private firestore: AngularFirestore
  ) {
    this.seasonsCollection = firestore.collection('seasons', ref => ref.where("active", "==", true).limit(1));
  }

  getSeason():Observable<Season[]> {
    return this.seasonsCollection.valueChanges();
  }

}
