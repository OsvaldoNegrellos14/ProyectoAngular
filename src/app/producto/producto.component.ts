import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { BooksDataRepositoryService } from '../books-data-repository.service';
import { Books } from '../books';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  book: Books;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private bookRepository: BooksDataRepositoryService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.book = this.bookRepository.getBook(this.id);
  }

}
