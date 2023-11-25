import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { L_docente } from '../models/l_docente/docente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LDocenteService {

  private apiUrl = 'https://apigestionacademica-b4jp.onrender.com';

  constructor(private http: HttpClient) { }

  getldocentes(lab_id: string) {
    return this.http.get(`${this.apiUrl}/labores/${lab_id}`);
  }
  getldocente(){
    return this.http.get(`${this.apiUrl}/labores`);
  }
  deleteldocente(lab_nombre: string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/labores?nombre=${lab_nombre}`);
  }
  obtenerDocentePorNombre(nombre: string): Observable<L_docente[]> {
    return this.http.get<L_docente[]>(`${this.apiUrl}/labores?nombre=${nombre}`);
  }
  actualizarDocentePorNombre(nombre: string, docenteActualizado: L_docente): Observable<L_docente> {
    return this.http.put<L_docente>(`${this.apiUrl}/labores?nombre=${nombre}`, docenteActualizado);
  }

  createldocente(l_docente: L_docente){
    return this.http.post(`${this.apiUrl}/labores`, l_docente);
  }
  updateldocente(lab_nombre: string, updatePeriodo: L_docente): Observable<any>{
    return this.http.put(`${this.apiUrl}/labores?nombre=${lab_nombre}`, updatePeriodo);
  }
}
