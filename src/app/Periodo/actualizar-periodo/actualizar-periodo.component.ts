import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodoI } from '../../models/periodo/periodo.interface';
import { PeriodosService } from '../../services/periodos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-periodo',
  templateUrl: './actualizar-periodo.component.html',
  styleUrls: ['./actualizar-periodo.component.css']
})
export class ActualizarPeriodoComponent implements OnInit {

  per_nombre_old:string;

  periodo: any = {
    per_nombre_old: '',
    per_nombre: '',
    per_anio: 0,
    per_semestre: 0,
    per_fecha_inicio: null,
    per_fecha_fin: null
  }
  formPeriodo = new FormGroup({
    per_nombre: new FormControl(),
    per_semestre: new FormControl(),
    per_anio: new FormControl()
  })

  fechas = new FormGroup({
    per_fecha_inicio: new FormControl(),
    per_fecha_fin: new FormControl()
  });

  constructor(private PeriodoService: PeriodosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPeriodo(this.route.snapshot.paramMap.get('per_nombre'))
  }

  getPeriodo(nombre: string){
    this.PeriodoService.getPeriodo(nombre).subscribe(data =>{
      this.formPeriodo.patchValue({
        per_nombre: data.results.per_nombre,
        per_anio: data.results.per_anio,
        per_semestre: data.results.per_semestre
      })
      this.per_nombre_old = data.results.per_nombre;
    })
  }

  updatePeriodo(form:any) {

    let fechaInicio = this.fechas.get('per_fecha_inicio').value;
    let fechaFin = this.fechas.get('per_fecha_fin').value;

    this.periodo.per_fecha_inicio = fechaInicio ? fechaInicio.toISOString().split('T')[0] : '';
    this.periodo.per_fecha_fin = fechaFin ? fechaFin.toISOString().split('T')[0] : '';
    this.periodo.per_anio = form.per_anio
    this.periodo.per_semestre = form.per_semestre
    this.periodo.per_nombre = form.per_nombre
    this.periodo.per_nombre_old = this.per_nombre_old
    
    this.PeriodoService.updatePeriodo(this.periodo).subscribe(data=>{
      if(data.code == 200){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Periodo actualizado correctamente",
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
