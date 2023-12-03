import { Injectable } from '@angular/core';
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_BASE_URL } from 'app/api-constants/api-constants.component';

@Injectable({
  providedIn: 'root'
})

export class DocumentsService {

  private apiURL: string = `${API_BASE_URL}`;

  constructor(private http: HttpClient) { }

  uploadFile(num_doc: number, eva_id:number, data: FormData): Observable<ResponseI> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<ResponseI>( `${this.apiURL}/upload?num_doc=${num_doc}&eva_id=${eva_id}`, data);
  }

}
