import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  data:any ={};
  constructor() { }

  ngOnInit() {

  }
onSubmit() {
    alert(JSON.stringify(this.data));
  }
  

}
