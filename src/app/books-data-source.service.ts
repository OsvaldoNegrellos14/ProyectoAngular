import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksDataSourceService {

  constructor(private http: HttpClient) { }
  getBooks(): any {
    return this.http.get('../assets/books.json');
  }
}
