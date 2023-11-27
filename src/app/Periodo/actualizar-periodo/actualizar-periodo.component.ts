import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    per_nombre: new FormControl('', Validators.required),
    per_semestre: new FormControl('', [Validators.required, Validators.min(0)]),
    per_anio: new FormControl('', [Validators.required, Validators.min(0)])
  })

  fechas = new FormGroup({
    per_fecha_inicio: new FormControl('', Validators.required),
    per_fecha_fin: new FormControl('', Validators.required)
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

    this.periodo.per_fecha_inicio = fechaInicio ? fechaInicio.toString().split('T')[0] : '';
    this.periodo.per_fecha_fin = fechaFin ? fechaFin.toString().split('T')[0] : '';
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
