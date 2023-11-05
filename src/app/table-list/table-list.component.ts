import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from 'app/services/evaluations.service';
import { EvaluationI } from 'app/models/evaluations/evaluations.interface';
import { data } from 'jquery';


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
    this.getTotalHours()
  }

  getEvaluation() {
    this.evalutionsService.getEvaluation().subscribe((data: any) => {
      this.evaluaciones = data.results;
      console.log(this.evaluaciones)
    });
  }

  getTotalHours(){
    this.evalutionsService.getEvaluation().subscribe(() =>{
      for (let i = 0; i < this.evaluaciones.length; i++) { 
        this.totalHoras += this.evaluaciones[i].lab_horas; 
      }
      console.log(this.totalHoras)
    });
  }
}
