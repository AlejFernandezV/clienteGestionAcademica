import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthToken(): Observable<Boolean>{
    let rol = localStorage.getItem('usu_rol')
    let token = localStorage.getItem('token')
    if(token && (rol === 'Coordinador' || rol === 'Decano')){
      return new Observable<Boolean>(observer => {
        observer.next(true);
      });
    } else{
      return new Observable<Boolean>(observer => {
        observer.next(false);
      });
    }
  }
}
