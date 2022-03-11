import { Injectable } from '@angular/core';
import { ComprarComponent } from '../comprar/comprar.component';

@Injectable({
  providedIn: 'root'
})
export class InicoiService {
comprar:ComprarComponent;
marca:string;
constructor() {

}

defineMarca(marca:string){
  this.marca = marca;
}

callComprar(){
  console.log(this.marca);
  return this.marca;
}

callVazia(){
  this.marca = "Vazio";
  return this.marca;
}

}
