import { Component, OnInit } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { Carro } from '../models/carro';
import { Moto } from '../models/moto';
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
  tipo:string;
  constructor(private service: ComprarService) { }

  ngOnInit() {
    this.carregarCarros();
  }

  carregarCarros(){
    this.tipo = 'Carros';
    this.service.getDef()
    .subscribe((carros: Carro[]) => {
      this.carros = carros;
      console.log(this.carros);

      this.carros.forEach(carro => {
        this.faixaPreco = carro.preco;
      });
  });
}

carregarCarrosByMarca(marca:string){
  this.service.getByMarcaImg(marca)
  .subscribe((carros: Carro[]) => {
    this.carros = carros;
    console.log(this.carros);

    this.carros.forEach(carro => {
      this.faixaPreco = carro.preco;
    });
});
}

carregarCarrosByLocalidadeAndMarca(){
  this.service.getByMarcaInLocalidade(this.localidade)
  .subscribe((carros: Carro[]) => {
    this.carros = carros;
    console.log(carros);
    this.carros.forEach(carro => {
      this.faixaPreco = carro.preco;
    });
});
}

carregarMotos(){
  this.tipo='Motos';
  this.service.getAllmotos()
  .subscribe((motos: Carro[]) => {
    this.carros = motos;
    console.log(this.carros);

    this.carros.forEach(carro => {
      this.faixaPreco = carro.preco;
    });
});
}

}
