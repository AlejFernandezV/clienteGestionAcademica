import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  constructor(private http: HttpClient) {}

  getEvaluation() : Observable<ResponseI> {
    return this.http.get<ResponseI>('https://nvxv3pn0-3333.use2.devtunnels.ms/evaluaciones?idDocente=1&nombrePeriodo=2024-1');
  }
}
