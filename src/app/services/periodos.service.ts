import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodoI } from 'app/models/periodo/periodo.interface';
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { API_BASE_URL } from 'app/api-constants/api-constants.component';

@Injectable({
  providedIn: 'root'
})
export class PeriodosService {

  private apiUrl = `${API_BASE_URL}`;

  constructor(private http: HttpClient) { }

  getPeriodo(id: string): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiUrl}/periodos/${id}`);
  }
  getPeriodos():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiUrl}/periodos/listar_nombres`);
  }
  deletePeriodo(id: string):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.apiUrl}/periodos/${id}`);
  }

  createPeriodo(periodo: PeriodoI):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.apiUrl}/periodos`, periodo);
  }
  updatePeriodo(id: string, updatePeriodo: PeriodoI): Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.apiUrl}/periodos/${id}`, updatePeriodo);
  }
}
