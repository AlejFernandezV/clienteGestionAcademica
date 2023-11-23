import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    per_fechainicio: null,
    per_fechafin: null
  }

   range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private PeriodoService: PeriodosService, private router:Router) { }

  ngOnInit(): void {
  }
  creaPeriodo(){
    this.periodo.per_fechainicio = this.range.get('start').value;
    this.periodo.per_fechafin = this.range.get('end').value;
    this.PeriodoService.createPeriodo(this.periodo).subscribe();
    this.router.navigate(['/listar-periodo']);
  }

}
