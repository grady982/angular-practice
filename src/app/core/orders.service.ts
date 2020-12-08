import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  async createNote(data: any) {
    try {
      return await this.firestore.collection('notepad').add(data);
    } catch (error) {
      console.log(error);
    }
  }

  getNotes() {
    // return this.firestore.collection('notepad').doc('hghZwlZK7227cNvFx6qb').get();
    return this.firestore.collection('notepad').get();
  }
}
