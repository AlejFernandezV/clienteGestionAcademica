import { Component, OnInit } from '@angular/core';
import { LAutoevaluacionService } from 'app/services/autoevaluacion/autoevaluacion.service';
import { l_autoevaluacion } from 'app/models/autoevaluacion/autoevaluacion';
@Component({
  selector: 'app-l-autoevaluacion',
  templateUrl: './l-autoevaluacion.component.html',
  styleUrls: ['./l-autoevaluacion.component.css']
})
export class LAutoevaluacionComponent implements OnInit {
  autoevaluacion: l_autoevaluacion = {
    a_periodo: 0,
    a_NombreD: '',
    a_NombreL: '',
    a_TipoL :'',
    a_horas :0,
    a_Descripcion :'',
    a_Acto :'',
    a_Estado :'',
    a_Evaluacion :0,
    a_fechaInicio :0,
    a_fechaFin :0,

  };
  
lautoevaluacion: l_autoevaluacion[] = [];

  constructor(private autoevaluacionService: LAutoevaluacionService,) { }


  ngOnInit(): void {
    // const myLaborDocente =this.docenteService.obtenerDocentes()
    this.obtenerAutoevaluacion();

  }

  obtenerAutoevaluacion() {
    this.lautoevaluacion = this.autoevaluacionService.obtenerAutoevaluacion();
  }


}
