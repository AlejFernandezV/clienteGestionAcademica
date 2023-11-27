import { Component, OnInit } from '@angular/core';
import { LDocenteService } from '../../services/l-docente.service';
import { L_docente } from 'app/models/l_docente/docente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  newDocente:L_docente ={
    lab_id:0,
    lab_horas: 0,
    tl_descripcion: '',
    lab_nombre: '',
    tl_codigo:'',
    tl_id:0,
  }
  constructor(
    private listService : LDocenteService,
    private router:Router
  ){

  }

  ngOnInit(): void {
    this.newLdocente()
  }
  
  newLdocente(){
    this.listService.createldocente(this.newDocente).subscribe();
    this.router.navigate(['/listar-labor']);
  console.log(
    this.newDocente
  )

  }

}
