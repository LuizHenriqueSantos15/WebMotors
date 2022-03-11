import { Component, OnInit } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { Carro } from '../models/carro';
import { ComprarService } from './comprar.service';

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
  carros:Carro[];
  marca:string;
  constructor(private service: ComprarService) { }

  ngOnInit() {
    this.carregarCarros();
  }

  carregarCarros(){
    this.service.getDef()
    .subscribe((carros: Carro[]) => {
      this.carros = carros;
      console.log(this.carros);

      this.carros.forEach(carro => {
        this.localidade = carro.localidade;
        this.faixaPreco = carro.preco;
      });
  });
}

}
