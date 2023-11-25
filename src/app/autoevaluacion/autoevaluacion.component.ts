import { Component, OnInit } from '@angular/core';
import { LAutoevaluacionService } from 'app/services/autoevaluacion/autoevaluacion.service';

@Component({
  selector: 'app-autoevaluacion',
  templateUrl: './autoevaluacion.component.html',
  styleUrls: ['./autoevaluacion.component.css'],
  
 
})

export class AutoevaluacionComponent  {

  myId=2
  newAutoevaluacion={
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
  }
    
  
  constructor(
    private listService : LAutoevaluacionService,
    ){}
   

  ngOnInit(): void {
  }

//   agregarAutoevaluacion()
// {
//   console.log('hola ',this.newAutoevaluacion);
//   this.listService.agregarAutoevaluacion(this.newAutoevaluacion)
//   this.myId ++;
//   this.newAutoevaluacion={
//     a_periodo: 0,
//     a_NombreD: '',
//     a_NombreL: '',
//     a_TipoL :'',
//     a_horas :0,
//     a_Descripcion :'',
//     a_Acto :'',
//     a_Estado :'',
//     a_Evaluacion :0,
//     a_fechaInicio :0,
//     a_fechaFin :0,
// }
// }
}
