import { Component, OnInit } from '@angular/core';
import { LDocenteService } from '../../services/l-docente.service';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  myId=3
  newDocente={
    id:this.myId,
    lb_Tipo: '',
    lb_Nombre: '',
    lb_Horas:0,
  }
  constructor(
    private listService : LDocenteService,
  ){

  }

  ngOnInit(): void {
  }
  agregarLabor()
{
  // console.log('hola desde adddocente',this.newDocente);
  this.listService.agregarDocente(this.newDocente)
  this.myId ++;
  this.newDocente={
    id:0 ,
    lb_Tipo: '',
    lb_Nombre: '',
    lb_Horas: 0,
}
}

}
