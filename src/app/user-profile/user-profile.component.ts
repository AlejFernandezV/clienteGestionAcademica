import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'app/services/usuarios.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  rol = localStorage.getItem('usu_rol')
  documento = localStorage.getItem('usu_num_doc')
  name:string = ""
  userName: string = ""

  constructor(private usuario: UsuariosService) { }
  
  ngOnInit() {  
    this.getUser()  
  }

  getUsernameFromEmail(user: string) {
    if (user) {
      return this.userName = user.split('@')[0];
    } 
  }
  getUser(){
    this.usuario.getUsuarioPorId(this.documento).subscribe(data => {
      if(data.status== 'success'){
        this.name = data.results.usu_nombre + " " + data.results.usu_apellido
        this.userName = data.results.usu_email
        this.getUsernameFromEmail(this.userName)
      }
    })
  }

}
