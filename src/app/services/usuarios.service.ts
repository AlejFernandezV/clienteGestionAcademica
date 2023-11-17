import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { UsuarioI } from '../models/usuario/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getUsuario(id: number) {
    return this.http.get(`${this.apiUrl}/usuarios/${id}`);
  }
  getUsuarios(){
    return this.http.get(`${this.apiUrl}/usuarios`);
  }
  deleteUsuario(id: number){
    return this.http.delete(`${this.apiUrl}/usuarios/${id}`);
  }

  createUsuario(usuario: UsuarioI){
    return this.http.post(`${this.apiUrl}/usuarios`, usuario);
  }
  updateUsuario(id: number, updateUsuario: UsuarioI){
    return this.http.put(`${this.apiUrl}/usuarios/${id}`, updateUsuario);
  }
}
