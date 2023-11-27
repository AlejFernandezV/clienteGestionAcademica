import { Component, OnInit } from '@angular/core';
import { LDocenteService } from '../../services/l-docente.service';
import { L_docente } from 'app/models/l_docente/docente';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  TiposLabores:[] =[]
  tl_descripcion:string;

  formLabor = new FormGroup({
    lab_nombre: new FormControl('',Validators.required),
    lab_horas: new FormControl('',Validators.required),
    tl_descripcion: new FormControl('',Validators.required)
  })

  newLabor:any ={
    lab_horas: 0,
    lab_nombre: '',
    tl_id:0,
  }
  constructor(
    private listService : LDocenteService,
    private router:Router
  ){

  }

  ngOnInit(): void {
    this.getNombresTL()
  }

  sendLabor(form:any){
    this.newLabor.lab_horas = form.lab_horas
    this.newLabor.lab_nombre = form.lab_nombre
    this.newLabor.tl_id = this.obtenerIdTL(form.tl_descripcion)

    this.listService.createldocente(this.newLabor).subscribe(data=>{
      if(data.code == 200){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Usuario actualizado correctamente",
          timer: 2000,
        })
        this.router.navigate(['/listar-labor']);
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

  getNombresTL(){
    this.listService.getTipoLabores().subscribe(data => {
      this.TiposLabores = data.results;
    })
  }
  obtenerIdTL(tl_descripcion:string){
    switch (tl_descripcion) {
      case "Docencia":
        return 1;
      case "Trabajos Docencia":
        return 2;
      case "Proyectos Investigación":
        return 3;
      case "Trabajos Investigación":
        return 4;
      case "Administración":
        return 5;
      case "Asesoría":
        return 6;
      case "Servicios":
        return 7;
      case "Extensión":
        return 8;
      case "Capacitación":
        return 9;
      case "Otros Servicios":
        return 10;
    }
  }

}
