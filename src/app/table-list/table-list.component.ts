import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from 'app/services/evaluations.service';
import { EvaluationI } from 'app/models/evaluations/evaluations.interface';
import { DocumentsService } from 'app/services/documents.service';
import { data } from 'jquery';
import { log } from 'console';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  evaluaciones: EvaluationI [] = [];
  totalHoras: number = 0 ;
  archivoPDF? ;
  //identificacion?: string;

  constructor(private evalutionsService: EvaluationsService, private documentoService: DocumentsService) { }

  ngOnInit() {
    this.getEvaluation()
    //this.searchByIdentification(this.identificacion)
  }

  getEvaluation() {
    this.evalutionsService.getEvaluation().subscribe((data: any) => {
      this.evaluaciones = data.results;
      console.log(this.evaluaciones)
    });
    this.getTotalHours()
  }

  getTotalHours(){
    this.evalutionsService.getEvaluation().subscribe(() =>{
      for (let i = 0; i < this.evaluaciones.length; i++) { 
        this.totalHoras += this.evaluaciones[i].lab_horas; 
      }
      console.log(this.totalHoras)
    });
  }

  onFileSelected(event) {
    console.log("Entrando a la carga de archivos");
    let fileInput = document.getElementById('pdfFile') as HTMLInputElement;
    let file = fileInput.files[0];
    
    console.log("pasa por aquí", file);
    if (file) {
      const formData = new FormData();

      formData.append("file", file);

      this.documentoService.uploadFile(formData).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    }
  }
  /*searchByIdentification(id: string){
    this.evalutionsService.getEvaluation().subscribe((data: any) => {
      this.evaluaciones = data.results.filter(evaluacion => evaluacion.lab_nombre === id);
      console.log(this.evaluaciones)
      console.log(this.identificacion)
    });
  }*/
}
