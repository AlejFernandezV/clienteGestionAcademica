import { Component, OnInit } from '@angular/core';
import { LDocenteService } from '../../services/l-docente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { L_docenteUpdate } from 'app/models/l_docente/updateLdocente';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent  {
  loading: any = true;
  id_rol: number 
  id = this.activeRoute.snapshot.paramMap.get('nombre')


 
  constructor(
    private listService : LDocenteService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ){

  }

  actualizarLdocente = new FormGroup({
    lab_nombre: new FormControl('',Validators.required),
    lab_horas: new FormControl('',Validators.required),
    tl_id: new FormControl('',Validators.required),
})


  ngOnInit() {
  
this.getLdocente(this.id)
}

getLdocente(nombre:string){
this.listService.getldocentes(nombre).subscribe(data=>{
  console.log(data)
  this.actualizarLdocente.patchValue({
    lab_nombre:data.results.lab_nombre,
    lab_horas:data.results.lab_horas,
    tl_id:data.results.tl_id,
  })
})
}

async actualizarDocente(form: any){
  
  let laboresD:  L_docenteUpdate = {
    lab_nombre: form.value.lab_nombre, // Asigna el valor del campo lab_nombre del formulario
    lab_horas: form.value.lab_horas, // Asigna el valor del campo lab_horas del formulario
    tl_id: form.value.tl_id, // Asigna el valor del campo tl_id del formulario
    tl_descripcion: form.value.tl_descripcion, // Asigna el valor del campo tl_descripcion del formulario
    tl_codigo: form.value.tl_codigo, // Asigna el valor del campo tl_codigo del formulario
    lab_id: form.value.lab_id, // Asigna el valor del campo lab_id del formulario
   
  }
  this.listService.updateldocente(laboresD).subscribe(data =>{
    console.log(data)
    if(data.status == 'Success'){
      this.loading = false
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Usuario actualizado correctamente",
        timer: 2000,
      })
      this.route.navigate(['/listar-labor']);
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
}}
// let Ldocenteid = this.activeRoute.snapshot.paramMap.get('nombre')
// this.listService.updateldocente(Ldocenteid,this.datosDocente).subscribe(data=>{
 
//  console.log(data)
// })
// console.log(Ldocenteid)
// }
