import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Books } from '../books';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-category',
  templateUrl: './result-category.component.html',
  styleUrls: ['./result-category.component.css']
})
export class ResultCategoryComponent implements OnInit {

  books: Books[] = [];
  categoria: string;
  objectService: Subscription;
  constructor(
    private route: ActivatedRoute,
    private firebaseAPI: FirebaseService) {
      this.categoria = this.route.snapshot.paramMap.get('id');
      this.firebaseAPI.readBook().
      subscribe( res => {
        console.log(res);
        this.books = res;
      });
    }

  ngOnInit() {
  }

}
