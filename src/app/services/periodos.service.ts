import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodoI } from 'app/models/periodo/periodo.interface';

@Injectable({
  providedIn: 'root'
})
export class PeriodosService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getPeriodo(id: string) {
    return this.http.get(`${this.apiUrl}/periodos/${id}`);
  }
  getPeriodos(){
    return this.http.get(`${this.apiUrl}/periodos`);
  }
  deletePeriodo(id: string){
    return this.http.delete(`${this.apiUrl}/periodos/${id}`);
  }

  createPeriodo(periodo: PeriodoI){
    return this.http.post(`${this.apiUrl}/periodos`, periodo);
  }
  updatePeriodo(id: string, updatePeriodo: PeriodoI){
    return this.http.put(`${this.apiUrl}/periodos/${id}`, updatePeriodo);
  }
}
