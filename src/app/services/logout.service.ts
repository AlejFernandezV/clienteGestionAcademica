import { Injectable } from '@angular/core';
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
    this.api.onLogout(token).subscribe(data =>{
      if (data.status == 'success'){
        localStorage.removeItem('token');
        localStorage.removeItem('usu_rol');
        localStorage.removeItem('usu_num_doc');
        this.router.navigate(['/inicio']);
      }else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Error",
          text: data.message,
          showConfirmButton: true,
        })
      }
    });

    
  }
}

