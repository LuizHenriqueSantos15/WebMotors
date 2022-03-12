import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';
import { InicoiService } from '../inicio/inicoi.service';
import { Moto } from '../models/moto';
@Injectable({
  providedIn: 'root'
})
export class ComprarService {

constructor(private http: HttpClient , private service:InicoiService) { }

getAllCars(): Observable<Carro[]>{
  return this.http.get<Carro[]>("https://localhost:5001/Carro");
}

getByMarca(): Observable<Carro[]>{
  var a = this.service.callComprar();
  return this.http.get<Carro[]>("https://localhost:5001/Carro/api/"+a);
}


getByMarcaImg(marca:string): Observable<Carro[]>{
  return this.http.get<Carro[]>("https://localhost:5001/Carro/api/"+marca);
}

getByMarcaInLocalidade(localidade:string): Observable<Carro[]>{
  var a = this.service.callComprar();
  if(a == "Vazio"){
    return this.http.get<Carro[]>("https://localhost:5001/Carro/"+localidade);
  } else {
    return this.http.get<Carro[]>("https://localhost:5001/Carro/api/"+a+"/"+localidade);
  }
}

getDef(){
  var call = this.service.callComprar(); // vazio ou a marca em si

  if(call == 'Vazio'){
    return this.getAllCars();
  } else {
    return this.getByMarca();
  }
}

getAllmotos(): Observable<Moto[]>{
  return this.http.get<Moto[]>("https://localhost:5001/Moto");
}

}
