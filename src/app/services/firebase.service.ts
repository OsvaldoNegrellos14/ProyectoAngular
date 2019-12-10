import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Books } from '../books';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebaseApi: AngularFireDatabase) { }

  public createBook(book: Books): Promise <any> {
    return this.firebaseApi.database.ref('books').push(book);
  }

  public readBook(): Observable <any> {
    return this.firebaseApi.list('books').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    );
  }

  public readBookId(key): Observable <any> {
    return this.firebaseApi.list('books/' + key).valueChanges();
  }

  public updateBook(book): Promise <any> {
    return this.firebaseApi.database.ref('books/' + book.key).set(book);
  }

  public deleteBook(book): Promise <any> {
    return this.firebaseApi.database.ref('books/' + book).remove();
  }
}
