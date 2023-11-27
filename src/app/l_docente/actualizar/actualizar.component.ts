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
  lab_nombreNew:string;

 
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
    tl_descripcion: new FormControl('',Validators.required),
    tl_codigo: new FormControl('',Validators.required),
    lab_id: new FormControl('',Validators.required),
})


  ngOnInit() {
  
this.getLdocente(this.id)
}

getLdocente(id:string){
this.listService.getldocentes(id).subscribe(data=>{
  console.log(data)
  this.actualizarLdocente.patchValue({
    lab_nombre:data.results.lab_nombre,
    lab_horas:data.results.lab_horas,
    tl_id:data.results.tl_id,
    tl_descripcion:data.results.tl_descripcion,
    tl_codigo:data.results.tl_descripcion,
  })
  this.lab_nombreNew = data.results.lab_nombre;
  console.log(this.lab_nombreNew)
})
}

async actualizarDocente(form: any){
  
  let laboresD:  L_docenteUpdate = {
    lab_nombre:this.lab_nombreNew,
    lab_horas:form.lab_horas,
    tl_id:form.tl_id,
    tl_descripcion:form.tl_descripcion,
    tl_codigo:form.tl_codigo,
    lab_id:form.lab_id,
  }
  this.listService.updateldocente(laboresD).subscribe(data =>{
    console.log(data)
    if(data.code == 200){
      this.loading = false
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: " actualizado correctamente",
        timer: 2000,
      })
    console.log(data)

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
