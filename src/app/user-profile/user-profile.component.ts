import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  nombre = localStorage.getItem('usu_nombre')
  documento = localStorage.getItem('usu_num_doc')
  rol = localStorage.getItem('usu_rol')
  email = localStorage.getItem('usu_email')
  userName: string

  constructor() { }
  
  ngOnInit() {  
    this.getUsernameFromEmail()  
  }

  getUsernameFromEmail() {
    if (this.email) {
      this.userName = this.email.split('@')[0];
    } else {
      console.log('No hay correo electrónico');
    }
  }

}
