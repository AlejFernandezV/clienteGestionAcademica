import { Component, OnInit } from '@angular/core';
import { LAutoevaluacionService } from 'app/services/autoevaluacion/autoevaluacion.service';
import { UsuariosService } from '../services/usuarios.service';
import { UsuarioI } from 'app/models/usuario/usuario.interface';
import { LDocenteService } from 'app/services/l-docente.service';
import { L_docente } from 'app/models/l_docente/docente';
import { PeriodoI } from 'app/models/periodo/periodo.interface';
import { PeriodosService } from 'app/services/periodos.service';
import { Router } from '@angular/router';
import { l_autoevaluacion } from 'app/models/autoevaluacion/autoevaluacion';

@Component({
  selector: 'app-autoevaluacion',
  templateUrl: './autoevaluacion.component.html',
  styleUrls: ['./autoevaluacion.component.css'],
  
 
})

export class AutoevaluacionComponent  {
  newAutoevaluacion:l_autoevaluacion = {
    eva_id:0,
    lab_id:0,
    per_id:0,
    usa_id:0,
    eva_estado:'',
    eva_puntaje:0,
    eva_resultado:'',
}
  

  usuarios: UsuarioI[] = [];
  docentes: L_docente[] = [];
  periodos: PeriodoI[] = [];


  constructor(
    private listService : LAutoevaluacionService,
    private usuarioService: UsuariosService,
    private lDocenteService: LDocenteService,
    private periodoService: PeriodosService,
    private router:Router

    ){}
   

    ngOnInit(): void {
      this.listDocentes();
      this. listLdocentes();
      this. listPeriodos();
    }
  
    agregarAutoevaluacion(){
      this.listService.createlAutoevaluacion(this.newAutoevaluacion).subscribe();
      this.router.navigate(['/lautoevaluacion']);
    console.log(
      this.newAutoevaluacion
    )
    
    }
    listDocentes(){
      this.usuarioService.getUsuarios().subscribe(
        res => {
          this.usuarios = res.results;
          console.log(this.usuarios)
        },
        err => console.log(err)
      );
  
    }
    listLdocentes(){
      this.lDocenteService.getldocente().subscribe(
        (res: any) => {
          this.docentes = res.results; 
          console.log(this.docentes );
          // Acceder a la propiedad 'results' para asignarla a la variable 'docentes'
        },
        err => console.log(err)
      );
    }


    listPeriodos(){
      this.periodoService.getPeriodos().subscribe(
        res => {
          this.periodos = res.results;
          console.log( this.periodos);

        },
        err => console.log(err)
      );
  
    }
//   agregarAutoevaluacion()
//  {
//    console.log('hola ',this.newAutoevaluacion);
//    this.listService.getlAutoevaluacion()
//    this.myId ++;
//    this.newAutoevaluacion={
//     a_periodo: 0,
//      a_NombreD: '',
//      a_NombreL: '',
//      a_TipoL :'',
//      a_horas :0,
//      a_Descripcion :'',
//      a_Acto :'',
//      a_Estado :'',
//      a_Evaluacion :0,
//      a_fechaInicio :0,
//      a_fechaFin :0,
//  }
//  }


}
