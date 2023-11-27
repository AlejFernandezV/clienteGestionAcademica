import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { l_autoevaluacion } from 'app/models/autoevaluacion/autoevaluacion';
import { ResponseI } from 'app/models/response.interface';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'app/api-constants/api-constants.component';



@Injectable({
  providedIn: 'root'
})

export class LAutoevaluacionService {
  private apiUrl = `${API_BASE_URL}`;

  constructor(private http: HttpClient) { }


  createlAutoevaluacion(L_autoevaluacion: l_autoevaluacion):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.apiUrl}/evaluaciones/crear`, L_autoevaluacion);
  }
  getlAutoevaluacion():Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiUrl}/evaluaciones/listar`);
  }
}
