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

  getPeriodo(nombre: string): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiUrl}/periodos/buscar_por_nombre?nombre=${nombre}`);
  }
  getPeriodos():Observable<ResponseI>{
<<<<<<< HEAD
    return this.http.get<ResponseI>(`${this.apiUrl}/periodos/listar_nombres`);
=======
    return this.http.get<ResponseI>(`${this.apiUrl}/periodos/listar`);
>>>>>>> main
  }
  deletePeriodo(nombre: string):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.apiUrl}/periodos/eliminar?nombre=${nombre}`);
  }

  createPeriodo(periodo: PeriodoI):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.apiUrl}/periodos/crear`, periodo);
  }
  updatePeriodo(updatePeriodo: PeriodoI): Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.apiUrl}/periodos/actualizar`, updatePeriodo);
  }
}
