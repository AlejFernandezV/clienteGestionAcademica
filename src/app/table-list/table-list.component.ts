import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from 'app/services/evaluations.service';
import { EvaluationI } from 'app/models/evaluations/evaluations.interface';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  evaluaciones: EvaluationI [] = [];
  totalHoras: number = 0 ;

  constructor(private evalutionsService: EvaluationsService) { }

  ngOnInit() {
    this.getEvaluation()
  }

  getEvaluation() {
    this.evalutionsService.getEvaluation().subscribe((data: any) => {
      this.evaluaciones = data.results;

      for (let i = 0; i < this.evaluaciones.length; i++) { 
        this.totalHoras += this.evaluaciones[i].lab_horas; 
      }
      console.log(this.totalHoras)
      console.log(this.evaluaciones)

    });
  }
}
