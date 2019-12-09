import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  data: any = {};
  constructor() { }

  ngOnInit() {

  }
  onSubmit() {
    alert(JSON.stringify(this.data));
  }


}
