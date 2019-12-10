import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-crud',
  templateUrl: './form-crud.component.html',
  styleUrls: ['./form-crud.component.css']
})
export class FormCrudComponent implements OnInit {

  data: any = {};

  constructor() { }

  ngOnInit() {
  }

  // public saveBook() {
  //   this.firebaseAPI.createClient(this.data)
  //     .then(() => {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'El libro a sido guardado!',
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //       console.log('Cliente insertado');
  //     },
  //       (err) => {
  //         console.log(err);
  //       });
  //       this.cleanInputs();
  // }

  public cleanInputs(){
    this.data.titulo = '',
    this.data.autor = '',
    this.data.categoria = '',
    this.data.pais = '',
    this.data.idioma = '',
    this.data.paginas = '',
    this.data.precio = '',
    this.data.anio = '',
    this.data.descripcion = '',
    this.data.imagen = null
  }

  public fillData(c) {
    this.data = c;
  }

  // public updateBook() {
  //   this.firebaseAPI.updateClient(this.data)
  //     .then(() => {
  //       this.subscription.unsubscribe();
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Libro modificado exitosamente',
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //       console.log('Cliente modificado');
  //     },
  //       (err) => {
  //         console.log(err);
  //       });
  // }

  // public removeClient(id) {
  //   Swal.fire({
  //     title: '¿Estás seguro?',
  //     text: "No podras revertir esto!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Si, bórralo!',
  //     cancelButtonText: 'Cancelar!'
  //   }).then((result) => {
  //     if (result.value) {
  //       this.firebaseAPI.removeClient(id);
  //       Swal.fire(
  //         'Borrado!',
  //         'El libro a sido eliminado.',
  //         'success'
  //       )
  //     }
  //   })
  // }

}
