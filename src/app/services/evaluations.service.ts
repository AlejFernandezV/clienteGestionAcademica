import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { API_BASE_URL } from 'app/api-constants/api-constants.component';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  private apiURL: String = `${API_BASE_URL}`;
  constructor(private http: HttpClient) {}

  getEvaluation() : Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiURL}evaluaciones?idDocente=1&nombrePeriodo=2024-1`)
  }
}
