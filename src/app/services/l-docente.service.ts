import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { L_docente } from '../models/l_docente/docente';
import { ResponseI } from 'app/models/response.interface';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'app/api-constants/api-constants.component';

@Injectable({
  providedIn: 'root'
})
export class LDocenteService {

  private apiUrl = `${API_BASE_URL}`;


  constructor(private http: HttpClient) { }

  getldocente():Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiUrl}/labores/listar`);
  }

  getldocentes(lab_nombre: string):Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiUrl}/labores/listar_por_nombre?nombre=${lab_nombre}`);
  }
  createldocente(l_docente: L_docente):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.apiUrl}/labores/crear`, l_docente);
  }
  deleteldocente(lab_nombre: string):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.apiUrl}/labores/eliminar?nombre=${lab_nombre}`);
  }
  updateldocente(updatePeriodo: L_docente): Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.apiUrl}/labores/actualizar`, updatePeriodo);
  }

  getTipoLabores():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiUrl}/labores/listar_tl_nombres`)
  }
}
