import { Injectable } from '@angular/core';
import { Books } from './books';
import { BooksDataSourceService } from './books-data-source.service';

@Injectable({
  providedIn: 'root'
})
export class BooksDataRepositoryService {
  private books: Books[] = [];
  constructor(private dataSource: BooksDataSourceService) {
    this.dataSource.getBooks().
    subscribe(response => {
      this.books = response.books;
    });
   }
   getBooks(): Books[] {
    return this.books;
   }
   getBook(id: number | string): Books {
    return this.getBooks().find(
      book =>  book.id === +id
      );
   }
}
