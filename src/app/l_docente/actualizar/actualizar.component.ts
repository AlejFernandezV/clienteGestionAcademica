import { Component, OnInit } from '@angular/core';
import { l_docente } from '../../models/l_docente/docente';
import { LDocenteService } from '../../services/l-docente.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent  {

  nuevoLaborDocente:l_docente ={
   
      id:0,
      lb_Tipo: '',
      lb_Nombre: '',
      lb_Horas:0,
    
  }
  constructor(
    private listService : LDocenteService

  ){

  }

  ngOnInit(): void {
  
  }

 
}