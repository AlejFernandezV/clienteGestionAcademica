import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'app/models/usuario/usuario.interface';
import { UsuariosService } from 'app/services/usuarios.service';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.component.html',
  styleUrls: ['./create-docente.component.css']
})
export class CreateDocenteComponent implements OnInit {

  docente: UsuarioI = {
    usu_identificacion: null,
    usu_tipoId: '',
    usu_email: '',
    usu_password: '',
    usu_rol: 'Docente',
    usu_nombres: '',
    usu_apellidos: '',
    usu_genero: '',
    usu_estudio: ''
  }
  generos = ["Masculino", "Femenino","Otro"];
  tipoDocentes = ["Tiempo Completo", "Planta", "Catedra"];
  tipoIds:string[] = ["CC", "Pasaporte","Otro"];


  constructor(private UsuarioService: UsuariosService, private router:Router) { }

  ngOnInit(): void {
  }
  createDocente(){
    this.UsuarioService.createUsuario(this.docente).subscribe();
    this.router.navigate(['/list-docente']);
  }

}
