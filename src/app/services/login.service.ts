import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { LoginI } from 'app/models/login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  postLogin(form: LoginI) : Observable<ResponseI> {
    //return this.http.post<ResponseI>('https://nvxv3pn0-3333.use2.devtunnels.ms/login', form); pc de mesa
    //return this.http.post<ResponseI>('https://tw0l7qqd-3333.use2.devtunnels.ms/login', form); // portatil
    return this.http.post<ResponseI>('http://127.0.0.1:3333/login', form)
  }
}
