import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioUpdateI } from 'app/models/usuario/usuarioUpdate.iterface';
import { UsuariosService } from 'app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-docente',
  templateUrl: './update-docente.component.html',
  styleUrls: ['./update-docente.component.css']
})
export class UpdateDocenteComponent implements OnInit {
  loading: any = true;
  generos = ["Masculino", "Femenino"];
  estados = ["Activo", "Inactivo"];
  tiposId = ["CC","Pasaporte"];
  tipoDocentes = ["Planta tiempo completo", "Planta medio tiempo", "Catedra tiempo completo", "Catedra medio tiempo"];
  id_rol: number 
  id = this.route.snapshot.paramMap.get('usu_num_doc')
  num_doc_old:number;

  constructor(private UsuarioService: UsuariosService, private router:Router, private route: ActivatedRoute) { }

  actualizarDocenteForm = new FormGroup({
    usu_num_doc: new FormControl('', [Validators.required, , Validators.min(0)]),
    usu_tipo_doc: new FormControl('', Validators.required),
    usu_email: new FormControl('', [Validators.required, Validators.email]),
    rol_descripcion: new FormControl('', Validators.required),
    usu_nombre: new FormControl('', Validators.required),
    usu_apellido: new FormControl('', Validators.required),
    usu_genero: new FormControl('', Validators.required),
    usu_estudio: new FormControl('', Validators.required),
    usu_estado: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.getUsuario(this.id)
  }

  getUsuario(id: string){
    this.UsuarioService.getUsuarioPorId(id).subscribe(data =>{
      this.actualizarDocenteForm.patchValue({
        usu_num_doc: data.results.usu_num_doc,
        usu_tipo_doc: data.results.usu_tipo_doc,
        usu_email: data.results.usu_email,
        rol_descripcion: data.results.rol_descripcion ,
        usu_nombre: data.results.usu_nombre,
        usu_apellido: data.results.usu_apellido,
        usu_genero: data.results.usu_genero,
        usu_estudio: data.results.usu_estudio,
        usu_estado: data.results.usu_estado,
      })

      this.num_doc_old = data.results.usu_num_doc;
    })
  }

  async actualizarDocente(form: any){
    this.getIdRol(form.rol_descripcion)
    
    let docente:  UsuarioUpdateI = {
      usu_num_doc_old: this.num_doc_old,
      usu_num_doc_new: form.usu_num_doc,
      usu_tipo_doc: 'C.C',
      usu_email: form.usu_email,
      rol_id: this.id_rol,
      usu_nombre: form.usu_nombre,
      usu_apellido: form.usu_apellido,
      usu_genero: form.usu_genero,
      usu_estudio: form.usu_estudio, 
      usu_estado: 'Activo',
    }
    this.getGenero(docente)
    this.UsuarioService.updateUsuario(docente).subscribe(data =>{
      if(data.code == 200){
        this.loading = false
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Usuario actualizado correctamente",
          timer: 2000,
        })
        this.router.navigate(['/list-docentes']);
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

  getIdRol(rolDescripcion: string) {
    switch(rolDescripcion){
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

  getGenero(docente: UsuarioUpdateI) {
    if (docente.usu_genero == 'Masculino'){
      docente.usu_genero = docente.usu_genero.substring(0,1)
    }else{
      docente.usu_genero = docente.usu_genero.substring(0,1)
    }
  }

  //get
  get tipoIde() {
    return this.actualizarDocenteForm.get('usu_tipo_doc') as FormControl;
  }
  get ide() {
    return this.actualizarDocenteForm.get('usu_num_doc') as FormControl;
  }
  get email() {
    return this.actualizarDocenteForm.get('usu_email') as FormControl;
  }
  
  get nombre() {
    return this.actualizarDocenteForm.get('usu_nombre') as FormControl;
  }
  get apellido() {
    return this.actualizarDocenteForm.get('usu_apellido') as FormControl;
  }
  get genero() {
    return this.actualizarDocenteForm.get('usu_genero') as FormControl;
  }
  get estudio() {
    return this.actualizarDocenteForm.get('usu_estudio') as FormControl;
  }
  get estado() {
    return this.actualizarDocenteForm.get('usu_estado') as FormControl;
  }
  get tipoDoc() {
    return this.actualizarDocenteForm.get('rol_descripcion') as FormControl;
  }

}
