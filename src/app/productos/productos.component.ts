import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Books } from '../books';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit, OnDestroy {
  books: Books[] = [];
  objectService: Subscription;

  constructor(private bookService: FirebaseService) {
    this.objectService = this.bookService.readBook()
    .subscribe( res => {
      this.books = res;
      console.log(res);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.objectService.unsubscribe();
  }
}
