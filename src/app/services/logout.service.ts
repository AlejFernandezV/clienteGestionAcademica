import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseI } from 'app/models/response.interface';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  
  constructor(
    private router: Router,  
    private api: LoginService  
  ) { }

  logout(){
    let token = localStorage.getItem('token')
    //this.api.onLogout(token);
    localStorage.removeItem('token');
        this.router.navigate(['/login']);/*.subscribe(data =>{
      if (data.status == 'success'){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Error",
          text: data.message,
          showConfirmButton: true,
        })
      }
    });*/

    
  }
}

