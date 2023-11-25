import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from 'app/services/evaluations.service';
import { EvaluationI } from 'app/models/evaluations/evaluations.interface';
import { DocumentsService } from 'app/services/documents.service';
import { data } from 'jquery';
import { log } from 'console';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  evaluaciones: EvaluationI [] = [];
  totalHoras: number = 0 ;
  archivoPDF? ;
  buttonCreateEvaluation: number = 0;
  buttonFile: number = 0;
  //identificacion?: string;

  constructor(
    private evalutionsService: EvaluationsService, 
    private documentoService: DocumentsService
  ) { }

  ngOnInit() {
    this.getEvaluation()
    //this.searchByIdentification(this.identificacion)
  }

  getEvaluation() {
    this.evalutionsService.getEvaluation().subscribe((data: any) => {
      if (data.results && data.results.length > 0){
        this.evaluaciones = data.results;
        console.log(this.evaluaciones)
      } else console.log('No hay evaluaciones disponibles');
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

  userRol(){
    let rol = localStorage.getItem('usu_rol')
    if(rol === 'Coordinador' || rol === 'Decano'){
      return this.buttonCreateEvaluation = 1;
    } else{
      return this.buttonCreateEvaluation = 0;
    }
  }
  
  userDocente(){
    let rol = localStorage.getItem('usu_rol')
    if(rol === 'Catedra'){
      return this.buttonFile = 1;
    } else{
      console.log("no se muestra el boton");
      
      return this.buttonFile = 0;
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
