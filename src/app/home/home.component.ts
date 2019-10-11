import { Component, OnInit } from '@angular/core';
import { BooksDataRepositoryService } from '../books-data-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookRepository: BooksDataRepositoryService) { }

  ngOnInit() {
  }
  get books() {
    return this.bookRepository.getBooks();
  }
}
