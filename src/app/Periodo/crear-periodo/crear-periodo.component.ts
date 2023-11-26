import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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

  createPeriodoForm = new FormGroup({
    per_nombre: new FormControl('', Validators.required),
    per_anio: new FormControl('', [Validators.required, Validators.min(0)]),
    per_semestre: new FormControl('', [Validators.required, Validators.min(0)]),
    per_fecha_inicio: new FormControl('', Validators.required),
    per_fecha_fin: new FormControl('', Validators.required),

  })

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

  getFecha(fecha: Date){

    const anio = fecha.getFullYear();
    const month = ('0' + (fecha.getMonth() + 1)).slice(-2);
    const day = ('0' + fecha.getDate()).slice(-2);
    const fechaF = `${anio}-${month}-${day}`;
    return fechaF;
  }
  sacarAnio(fecha: Date){
    return fecha.getFullYear();
  } 
  //get
  get nombre() {
    return this.createPeriodoForm.get('per_nombre') as FormControl;
  }
  get anio() {
    return this.createPeriodoForm.get('per_anio') as FormControl;
  }
  get semestre() {
    return this.createPeriodoForm.get('per_semestre') as FormControl;
  }
  get fechaI(){
    return this.createPeriodoForm.get('per_fecha_inicio') as FormControl;
  }
  get fechaF(){
    return this.createPeriodoForm.get('per_fecha_fin') as FormControl;
  }
}
