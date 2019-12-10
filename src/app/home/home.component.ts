import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Books } from '../books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Books[] = [];
  filter: any;
  constructor(private fireService: FirebaseService) { 
    this.fireService.readBook().
    subscribe(res => {
      this.books = res;
      this.filter = this.books.slice(-9);
      console.log(this.filter);
  });
  }
 ngOnInit() {

 }
}
