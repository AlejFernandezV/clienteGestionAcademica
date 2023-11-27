import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_BASE_URL } from 'app/api-constants/api-constants.component';
import { Observable} from "rxjs";
import { ResponseI } from 'app/models/response.interface';
import { notificacionI } from 'app/models/notificacion/notificacion.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private apiURL: String = `${API_BASE_URL}`;
  constructor(private http: HttpClient) { }

  postNotification(noti_data:notificacionI): Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.apiURL}/notificaciones/crear`,noti_data)
  }

  getNotification(usu_id:number): Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.apiURL}/notificaciones/listar?usu_id=${usu_id}`)
  }

  updateStateNotification(data:any): Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.apiURL}/notificaciones/actualizar`,data)
  }
}
