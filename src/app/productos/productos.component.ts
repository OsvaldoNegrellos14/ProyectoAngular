import { Component, OnInit } from '@angular/core';
import { BooksDataRepositoryService } from '../books-data-repository.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private bookRepository: BooksDataRepositoryService) { }

  ngOnInit() {
  }
  get books() {
    return this.bookRepository.getBooks();
  }

}
