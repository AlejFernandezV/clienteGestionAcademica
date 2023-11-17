import { Injectable } from '@angular/core';
import { l_autoevaluacion } from 'app/models/autoevaluacion/autoevaluacion';

const listAutoevaluacion =[
  { 

    "a_periodo": 1,
    "a_NombreD": "juan",
    "a_NombreL": "este",
    "a_TipoL" :"fy",
    "a_horas" :33,
    "a_Descripcion" :"pedro",
    "a_Acto" :"carlos",
    "a_Estado" :"manu",
    "a_Evaluacion" :34,
    "a_fechaInicio" :45,
    "a_fechaFin" :56,
},
   
]
@Injectable({
  providedIn: 'root'
})




export class LAutoevaluacionService {

  constructor() { }


  obtenerAutoevaluacion() {
    return listAutoevaluacion;
  }

  agregarAutoevaluacion(L_Autoevaluacion: l_autoevaluacion) {
    listAutoevaluacion.push(L_Autoevaluacion);
  }

  

}
