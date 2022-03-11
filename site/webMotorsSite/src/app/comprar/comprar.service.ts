import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';
import { InicoiService } from '../inicio/inicoi.service';
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

getDef(){
  var call = this.service.callComprar(); // vazio ou a marca em si

  if(call == 'Vazio'){
    return this.getAllCars();
  } else {
    return this.getByMarca();
  }
}

}
