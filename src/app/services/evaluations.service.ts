import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { EvaluationResolvedI } from 'app/models/evaluations/evaluationsResolved.interface';
import { API_BASE_URL } from 'app/api-constants/api-constants.component';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  private apiURL: String = `${API_BASE_URL}`;
  constructor(private http: HttpClient) {}

  getEvaluationPorNumDoc(num_doc: number) : Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiURL}/evaluaciones/listar_por_docente_num_doc?num_doc=${num_doc}`)
  }

  getEvaluationPorNombApel(nombre:string,apellido:string) : Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.apiURL}/evaluaciones/listar_por_docente_nomb_apel?nombre=${nombre}&apellido=${apellido}`)
  }

  getEvaluationPorNomPerNumDoc(per_nombre: string, num_doc:number) : Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiURL}/evaluaciones/listar_por_periodo_num_doc?per_nombre=${per_nombre}&num_doc=${num_doc}`)
  }
  getEvaluationForDean() : Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiURL}/evaluaciones/listar_pd`)
  }

  getEvaluationForCoord() : Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiURL}/evaluaciones/listar_pc`)
  }

  getEvaluations() : Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiURL}/evaluaciones/listar`)
  }

  getEvaluationPorPeriodo(per_nombre: string): Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiURL}/evaluaciones/listar_por_periodo?per_nombre=${per_nombre}`)
  }

  getEvaluationPorId(eva_id:number): Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiURL}/evaluaciones/listar_por_id?eva_id=${eva_id}`)
  }

  updateEvaluationState(result:any): Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.apiURL}/evaluaciones/actualizar_estado`,result)
  }

  sendEvaluationResults(eva_result:EvaluationResolvedI): Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.apiURL}/evaluaciones/realizar`,eva_result)
  }

}
