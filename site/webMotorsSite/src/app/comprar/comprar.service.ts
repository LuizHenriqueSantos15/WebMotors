import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {

constructor(private http: HttpClient) { }

getAllCars(): Observable<Carro[]>{
  return this.http.get<Carro[]>("https://localhost:5001/Carro");
}
}
