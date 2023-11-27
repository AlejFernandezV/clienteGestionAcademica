import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'app/api-constants/api-constants.component';
import { ResponseI } from 'app/models/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private apiUrl = `${API_BASE_URL}`;

  constructor(private http: HttpClient) { }

  getReporte(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiUrl}/reporte`);
  }
}
