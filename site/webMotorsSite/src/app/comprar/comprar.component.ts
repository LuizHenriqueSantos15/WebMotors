import { Component, OnInit } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  localidade:string;
  ano:string;
  faixaPreco:string;
  nomeCarro:string;
  inicio:InicioComponent;
  constructor() { }

  ngOnInit() {
   this.localidade = 'São José Dos Campos/Sp';
   this.ano = '2020';
   this.faixaPreco= '40.000,00';
  }

  carregarCarros(){
    var carros = this.inicio.pegarCarroDesejado();
    this.nomeCarro = carros;
  }

}
