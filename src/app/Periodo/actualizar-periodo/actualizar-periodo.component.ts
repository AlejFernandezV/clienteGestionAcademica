import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodoI } from '../../models/periodo/periodo.interface';
import { PeriodosService } from '../../services/periodos.service';

@Component({
  selector: 'app-actualizar-periodo',
  templateUrl: './actualizar-periodo.component.html',
  styleUrls: ['./actualizar-periodo.component.css']
})
export class ActualizarPeriodoComponent implements OnInit {

  periodo: PeriodoI = {
    per_nombre: '',
    per_fechainicio: null,
    per_fechafin: null
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private PeriodoService: PeriodosService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const nomP = <string>this.activeRoute.snapshot.params.id;

    if (nomP) {
      this.PeriodoService.getPeriodo(nomP).subscribe(
        res => {
          this.periodo = res[0];
          console.log(res[0]);
        },
        err => console.log(err)
      );
    }
  }
  updatePeriodo() {
    this.periodo.per_fechainicio = this.range.get('start').value;
    this.periodo.per_fechafin = this.range.get('end').value;
    this.PeriodoService.updatePeriodo(this.periodo.per_nombre, this.periodo).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    this.router.navigate(['/listar-periodo']);
  }

}
