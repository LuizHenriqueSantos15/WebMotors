import { Component, OnInit } from '@angular/core';
import { ComprarComponent } from '../comprar/comprar.component';
import { ComprarService } from '../comprar/comprar.service';
import { InicoiService } from './inicoi.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nomeCarro:string;
  marca:string;
  comprar:ComprarComponent;
  constructor(private service : InicoiService) { }

  ngOnInit() {

  }

  pegarCarroDesejado(){
    if(this.marca === undefined){
      this.service.callVazia();
    } else {
      this.service.defineMarca(this.marca);
    }
  }

}
