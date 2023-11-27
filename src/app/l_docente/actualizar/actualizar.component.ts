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
    lab_nombre:form.results.lab_nombre,
    lab_horas:form.results.lab_nombre,
    tl_id:form.results.lab_horas,
    tl_descripcion:form.results.tl_descripcion,
    tl_codigo:form.results.tl_codigo,
   lab_id:form.results.lab_id,
   
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
