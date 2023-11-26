import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioI } from 'app/models/usuario/usuario.interface';
import { UsuariosService } from 'app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.component.html',
  styleUrls: ['./create-docente.component.css']
})
export class CreateDocenteComponent implements OnInit {

  loading: any = true;
  generos = ["Masculino", "Femenino"];
  tiposId = ["CC", "Pasaporte"];
  estados = ["Activo", "Inactivo"];
  tipoDocentes = ["Planta tiempo completo", "Planta medio tiempo", "Catedra tiempo completo", "Catedra medio tiempo"];
  id_rol: number

  constructor(private UsuarioService: UsuariosService, private router: Router) { }

  createDocenteForm = new FormGroup({
    usu_num_doc: new FormControl('', [Validators.required, Validators.min(0)]),
    usu_tipo_doc: new FormControl('', Validators.required),
    usu_email: new FormControl('', [Validators.required, Validators.email]),
    usu_password: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
    rol_descripcion: new FormControl('', Validators.required),
    usu_nombre: new FormControl('', Validators.required),
    usu_apellido: new FormControl('', Validators.required),
    usu_genero: new FormControl('', Validators.required),
    usu_estudio: new FormControl('', Validators.required),
    usu_estado: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }

  async createDocente(form: any) {
    this.getIdRol(form.rol_descripcion)

    let docente: UsuarioI = {
      usu_num_doc: form.usu_num_doc,
      usu_tipo_doc: form.usu_tipo_doc,
      usu_email: form.usu_email,
      usu_password: form.usu_password,
      rol_id: this.id_rol,
      usu_nombre: form.usu_nombre,
      usu_apellido: form.usu_apellido,
      usu_genero: form.usu_genero,
      usu_estudio: form.usu_estudio,
      usu_estado: 'Activo',
    }
    this.getGenero(docente)
    this.UsuarioService.createUsuario(docente).subscribe(data =>{
      if(data.status == 'success'){
        this.loading = false
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Usuario creado correctamente",
          timer: 2000,
        })
        this.router.navigate(['/list-docentes']);
      } else {
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

  getIdRol(rolDescripcion: string) {
    switch (rolDescripcion) {
      case 'Planta tiempo completo':
        this.id_rol = 1;
        break;
      case 'Planta medio tiempo':
        this.id_rol = 2;
        break;
      case 'Catedra tiempo completo':
        this.id_rol = 3;
        break;
      case 'Planta medio tiempo':
        this.id_rol = 4;
    }
  }

  getGenero(docente: UsuarioI) {
    if (docente.usu_genero == 'Masculino') {
      docente.usu_genero = docente.usu_genero.substring(0, 1)
    } else {
      docente.usu_genero = docente.usu_genero.substring(0, 1)
    }
  }
  //get
  get tipoIde() {
    return this.createDocenteForm.get('usu_tipo_doc') as FormControl;
  }
  get ide() {
    return this.createDocenteForm.get('usu_num_doc') as FormControl;
  }
  get email() {
    return this.createDocenteForm.get('usu_email') as FormControl;
  }
  get pass() {
    return this.createDocenteForm.get('usu_password') as FormControl;
  }
  get nombre() {
    return this.createDocenteForm.get('usu_nombre') as FormControl;
  }
  get apellido() {
    return this.createDocenteForm.get('usu_apellido') as FormControl;
  }
  get genero() {
    return this.createDocenteForm.get('usu_genero') as FormControl;
  }
  get estudio() {
    return this.createDocenteForm.get('usu_estudio') as FormControl;
  }
  get estado() {
    return this.createDocenteForm.get('usu_estado') as FormControl;
  }
  get tipoDoc() {
    return this.createDocenteForm.get('rol_descripcion') as FormControl;
  }
}
