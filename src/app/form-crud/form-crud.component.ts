import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { Books } from '../books';

@Component({
  selector: 'app-form-crud',
  templateUrl: './form-crud.component.html',
  styleUrls: ['./form-crud.component.css']
})
export class FormCrudComponent implements OnInit, OnDestroy {
  books: Books[] = [];
  data: any = {};
  subscription: Subscription;
  constructor(private fireBaseAPI: FirebaseService) {
    this.subscription = this.fireBaseAPI.readBook().subscribe(res => {
      this.books = res;
    });
  }

  ngOnInit() {
  }

  public saveBook() {
    this.fireBaseAPI.createBook(this.data)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'El libro a sido guardado!',
          showConfirmButton: false,
          timer: 1500
        });
      },
        (err) => {
          console.log(err);
        });
    this.cleanInputs();
  }

  public cleanInputs() {
    this.data.title = '',
    this.data.author = '',
    this.data.category = '',
    this.data.country = '',
    this.data.language = '',
    this.data.pages = '',
    this.data.price = '',
    this.data.year = '',
    this.data.description = ''
    // this.data.imageLink = null;
  }

  public fillData(c) {
    this.data = c;
    this.hideButtonSend();
  }

  public hideButtonUpdate() {
    document.getElementById('update').style.display = 'none';
    document.getElementById('send').style.display = 'inline';
   }

   public hideButtonSend() {
     document.getElementById('send').style.display = 'none';
     document.getElementById('update').style.display = 'inline-block';
    }

  public updateBook() {
    this.fireBaseAPI.updateBook(this.data)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Libro modificado exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
        console.log('Cliente modificado');
      },
        (err) => {
          console.log(err);
        });
  }

  public removeBook(id) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podras revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, bórralo!',
      cancelButtonText: 'Cancelar!'
    }).then((result) => {
      if (result.value) {
        this.fireBaseAPI.deleteBook(id);
        Swal.fire(
          'Borrado!',
          'El libro a sido eliminado.',
          'success'
        );
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
