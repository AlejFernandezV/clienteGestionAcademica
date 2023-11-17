import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioI } from 'app/models/usuario/usuario.interface';
import { UsuariosService } from 'app/services/usuarios.service';

@Component({
  selector: 'app-update-docente',
  templateUrl: './update-docente.component.html',
  styleUrls: ['./update-docente.component.css']
})
export class UpdateDocenteComponent implements OnInit {

  docente: UsuarioI = {
    usu_identificacion: 0,
    usu_tipoId: '',
    usu_email: '',
    usu_password: '',
    usu_rol: 'Docente',
    usu_nombres: '',
    usu_apellidos: '',
    usu_genero: '',
    usu_estudio: ''
  }
  generos = ["Masculino", "Femenino", "Otro"];
  tipoDocentes = ["Tiempo Completo", "Planta", "Catedra"];
  tipoIds: string[] = ["CC", "Pasaporte", "Otro"];

  constructor(private UsurioService: UsuariosService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_e = <number>this.activeRoute.snapshot.params.id;

    if (id_e) {
      this.UsurioService.getUsuario(id_e).subscribe(
        res => {
          this.docente = res[0];
          console.log(res[0]);
        },
        err => console.log(err)
      );
    }
  }
  updateDocente() {
    this.UsurioService.updateUsuario(this.docente.usu_identificacion, this.docente).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    this.router.navigate(['/list-docentes']);
  }

}
