import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { LDocenteService } from '../../services/l-docente.service';
import { l_docente } from '../../models/l_docente/docente';

@Component({
  selector: 'app-listar-labor',
  templateUrl: './listar-labor.component.html',
  styleUrls: ['./listar-labor.component.css']
})
export class ListarLaborComponent implements OnInit {
  docenteAEditar: l_docente = {
    id: 0, // ID del docente que quieres editar
     
    lb_Tipo:''  , 
    lb_Nombre: '' , 
    lb_Horas:0  ,
  };
docentes: l_docente[] = [];

  constructor(private docenteService: LDocenteService,) {}

  ngOnInit(): void {
    // const myLaborDocente =this.docenteService.obtenerDocentes()
    this.obtenerDocentes();
  }

  obtenerDocentes() {
    this.docentes = this.docenteService.obtenerDocentes();
  }

  editarDocente(): void {
    this.docenteService.editDocente(this.docenteAEditar);
  }

  agregarDocente() {
    
    
    // console.log(nuevoDocente);
    // this.docenteService.agregarDocente(nuevoDocente);
    
    // this.obtenerDocentes();
  }
 

  eliminarDocente(id:number) {
    this.docenteService.eliminarLaborDocente(id);
    //  this.obtenerDocentes();
  }


}

