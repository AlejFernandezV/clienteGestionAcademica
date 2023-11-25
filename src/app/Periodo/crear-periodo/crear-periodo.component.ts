import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PeriodoI } from 'app/models/periodo/periodo.interface';
import { PeriodosService } from 'app/services/periodos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-periodo',
  templateUrl: './crear-periodo.component.html',
  styleUrls: ['./crear-periodo.component.css']
})
export class CrearPeriodoComponent implements OnInit {

  periodo: PeriodoI = {
    per_nombre: '',
    per_semestre: 0,
    per_anio: 0,
    per_fecha_inicio: null,
    per_fecha_fin: null
  }
  semestres = [1, 2];

  formPeriodo = new FormGroup({
    per_nombre: new FormControl(),
    per_semestre: new FormControl(),
    per_anio: new FormControl()
  })

  fechas = new FormGroup({
    per_fecha_inicio: new FormControl(),
    per_fecha_fin: new FormControl()
  });

  constructor(private PeriodoService: PeriodosService, private router:Router) { }

  ngOnInit(): void {
  }
  sendPeriodo(form:any){

    let fechaInicio = this.fechas.get('per_fecha_inicio').value;
    let fechaFin = this.fechas.get('per_fecha_fin').value;

    this.periodo.per_fecha_inicio = fechaInicio ? fechaInicio.toISOString().split('T')[0] : '';
    this.periodo.per_fecha_fin = fechaFin ? fechaFin.toISOString().split('T')[0] : '';
    this.periodo.per_anio = form.per_anio
    this.periodo.per_semestre = form.per_semestre
    this.periodo.per_nombre = form.per_nombre
    
    this.PeriodoService.createPeriodo(this.periodo).subscribe(data=>{
      if(data.code == 200){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Periodo creado correctamente",
          timer: 2000,
        })
        this.router.navigate(['/listar-periodo']);
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
  

}
