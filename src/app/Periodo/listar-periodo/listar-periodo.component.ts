import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeriodoI } from 'app/models/periodo/periodo.interface';
import { PeriodosService } from 'app/services/periodos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-periodo',
  templateUrl: './listar-periodo.component.html',
  styleUrls: ['./listar-periodo.component.css']
})
export class ListarPeriodoComponent implements OnInit {

  periodos: PeriodoI[] = [];  

  constructor(private periodoService: PeriodosService, private router: Router) { }

  ngOnInit(): void {
    this.listPeriodos();
  }
  listPeriodos(){
    
    this.periodoService.getPeriodos().subscribe(
      res => {
        this.periodos = res.results;
      },
      err => console.log(err)
    );

  }
  deletePeriodo(nombre: string){
    this.periodoService.deletePeriodo(nombre).subscribe(
      res=>{
        console.log('Periodo eliminado');
        this.listPeriodos();
      },
      err=> console.log(err)
    );
  }
  
  updatePeriodo(id: string){
    this.router.navigate(['/actualizar-periodo'+id]);
  }
  


}
