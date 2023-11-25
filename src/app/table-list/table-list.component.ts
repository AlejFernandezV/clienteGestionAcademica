import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from 'app/services/evaluations.service';
import { EvaluationI } from 'app/models/evaluations/evaluations.interface';
import { DocumentsService } from 'app/services/documents.service';
import { data } from 'jquery';
import { log } from 'console';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { UsuariosService } from 'app/services/usuarios.service';

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
  num_doc= localStorage.getItem('usu_num_doc')

  constructor(
    private usuario: UsuariosService,
    private evalutionsService: EvaluationsService, 
    private documentoService: DocumentsService
  ) { }

  ngOnInit() {
    this.getEvaluation()
  }

  getEvaluation() {
    console.log("num_doc para evaluacion: ", this.num_doc)
    this.evalutionsService.getEvaluation(this.num_doc).subscribe((data: any) => {
      if (data.results && data.results.length > 0){
        this.evaluaciones = data.results;
        console.log(this.evaluaciones)
      } else{
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Oops...',
          text: 'No hay evaluaciones disponibles',
          showConfirmButton: true,
        })
      } console.log('No hay evaluaciones disponibles');
    });
    this.getTotalHours()
  }

  getTotalHours(){
    this.evalutionsService.getEvaluation(this.num_doc).subscribe(() =>{
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

  getUserRol(){
    let rol = localStorage.getItem('usu_rol')
    if(rol === 'Coordinador' || rol === 'Decano'){
      return this.buttonCreateEvaluation = 1;
    } else{
      console.log("no se muestra el boton de crear evaluacion");
      return this.buttonCreateEvaluation = 0;
    }
  }
  
  getUserTipoDocente(){
    let rol = localStorage.getItem('usu_rol')
    if(rol === 'Ocasional tiempo completo' || rol == 'Ocasional medio tiempo'){
      console.log("se muestra el boton enviar archivo");
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
