import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nomeCarro:string;

  constructor() { }

  ngOnInit() {

  }

  pegarCarroDesejado(){
    console.log(this.nomeCarro);
    return this.nomeCarro;
  }

}
