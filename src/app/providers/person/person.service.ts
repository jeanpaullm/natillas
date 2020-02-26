import { Injectable } from '@angular/core';

import { Person } from '../../models/person';

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsCollection: AngularFirestoreCollection<Person>;

  constructor(
    private firestore: AngularFirestore
  ) {
    this.personsCollection = firestore.collection<Person>('persons');
  }

  getPersons():Observable<Person[]> {
    return this.personsCollection.valueChanges();
  }

}
