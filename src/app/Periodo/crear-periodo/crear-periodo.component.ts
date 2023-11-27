import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PeriodoI } from 'app/models/periodo/periodo.interface';
import { PeriodosService } from 'app/services/periodos.service';


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
    per_nombre: new FormControl('', Validators.required),
    per_semestre: new FormControl('', [Validators.required, Validators.min(0)]),
    per_anio: new FormControl('', [Validators.required, Validators.min(0)])
  })

  fechas = new FormGroup({
    per_fecha_inicio: new FormControl('', Validators.required),
    per_fecha_fin: new FormControl('', Validators.required)
  });

  constructor(private PeriodoService: PeriodosService, private router:Router) { }

  ngOnInit(): void {
  }
  sendPeriodo(form:any){

    let fechaInicio = this.fechas.get('per_fecha_inicio').value;
    let fechaFin = this.fechas.get('per_fecha_fin').value;

    this.periodo.per_fecha_inicio = fechaInicio ? fechaInicio.toString().split('T')[0] : '';
    this.periodo.per_fecha_fin = fechaFin ? fechaFin.toString().split('T')[0] : '';
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
  //get
  get nombre() {
    return this.formPeriodo.get('per_nombre') as FormControl;
  }
  get anio() {
    return this.formPeriodo.get('per_anio') as FormControl;
  }
  get semestre() {
    return this.formPeriodo.get('per_semestre') as FormControl;
  }
  get fechaI(){
    return this.fechas.get('per_fecha_inicio') as FormControl;
  }
  get fechaF(){
    return this.fechas.get('per_fecha_fin') as FormControl;
  }
}
