import { Injectable } from '@angular/core';
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DocumentsService {

  constructor(private http: HttpClient) { }

  uploadFile(data: FormData): Observable<ResponseI> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<ResponseI>('https://tw0l7qqd-3333.use2.devtunnels.ms/upload', data);
  }

}
