import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { login } from 'app/models/login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  postLogin(form: login) : Observable<ResponseI> {
    return this.http.post<ResponseI>('https://nvxv3pn0-3333.use2.devtunnels.ms/login', form);
  }
}
