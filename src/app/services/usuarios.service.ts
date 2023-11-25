import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { UsuarioI } from '../models/usuario/usuario.interface';
import { API_BASE_URL } from 'app/api-constants/api-constants.component';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = `${API_BASE_URL}`;

  constructor(private http: HttpClient) { }

  getUsuario(nombre: string, apellido: string): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiUrl}/usuarios/buscar_por_nombre?nombre=${nombre}&apellido=${apellido}`);
  }
  getUsuarios(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiUrl}/usuarios/listar_pd`);
  }
  getUsuarioPorId(id:string): Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiUrl}/usuarios/buscar_por_num_doc?num_doc=${id}`);
  }
  deleteUsuario(id: number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(`${this.apiUrl}/usuarios/buscar_por_num_doc?num_doc=${id}`);
  }

  createUsuario(usuario: UsuarioI): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.apiUrl}/usuarios/crear`, usuario);
  }
  
  updateUsuario(updateUsuario: UsuarioI): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.apiUrl}/usuarios/actualizar`, updateUsuario);
  }
}
