import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Observable, throwError, Subject } from "rxjs";
import { LoginI } from 'app/models/login/login.interface';
import { API_BASE_URL } from 'app/api-constants/api-constants.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiURL: string = `${API_BASE_URL}`;

  constructor(private http: HttpClient) {}

  postLogin(form: LoginI): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.apiURL}/login`, form);
  }

  onLogout(token: any): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.apiURL}/logout`, token.token);
  }
}
