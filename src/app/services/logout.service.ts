import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private apiUrl = '/api';
  token: string;
  

  constructor(
    private router: Router    
  ) { }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    //window.location.reload();
  }
}

