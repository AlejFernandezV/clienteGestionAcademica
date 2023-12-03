import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EvaluationsService } from 'app/services/evaluations.service';
import { EvaluationResolvedI } from 'app/models/evaluations/evaluationsResolved.interface';
import Swal from 'sweetalert2';
import { DocumentsService } from 'app/services/documents.service';

@Component({
  selector: 'app-enviar-autoeva',
  templateUrl: './enviar-autoeva.component.html',
  styleUrls: ['./enviar-autoeva.component.css']
})
export class EnviarAutoevaComponent implements OnInit {

  eva_id: number;
  rol: string;
  labor: string;
  tipo_labor: string;
  uploadFilesPermition: number;
  num_doc = localStorage.getItem('num_doc')
  
  formResults = new FormGroup({
    eva_puntaje: new FormControl('', Validators.required),
    eva_resultado: new FormControl('', [Validators.min(0), Validators.max(100)]),
  });

  constructor(
    public dialogRef: MatDialogRef<EnviarAutoevaComponent>,
    private evaService: EvaluationsService,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private documentoService: DocumentsService
  ) { }

  ngOnInit(): void {
    this.eva_id = this.data.eva_id
    this.rol = this.data.usu_rol
    this.labor =  this.data.labor
    this.tipo_labor = this.data.tipo_labor
    this.permitionUploadFiles()
  }

  permitionUploadFiles(){
    if((this.rol.includes("tiempo completo") || this.rol.includes("Planta")) 
    && this.tipo_labor === "Docencia"){
      this.uploadFilesPermition = 0
    }else{
      this.uploadFilesPermition = 1
    }
  }

  async sendEvaluation(form:any){

    let results: EvaluationResolvedI = {
      eva_id: this.eva_id,
      eva_puntaje: form.eva_puntaje,
      eva_resultado:form.eva_resultado, 
      eva_estado: "Terminado"
    }

    if(results.eva_puntaje > 100){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Error",
        text: "La calificación de su evaluación supera el valor de 100",
        showConfirmButton: true,
      })
    }else{
      this.onFileSelected(Number(this.num_doc), results.eva_id)
      this.evaService.sendEvaluationResults(results).subscribe(data => {
        if(data.status == 'success'){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "¡Evaluación enviada correctamente!",
            timer: 2000,
          })
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
  }

  onFileSelected(num_doc: number, eva_id: number) {
    let fileInput = document.getElementById('pdfFile') as HTMLInputElement;
    let file = fileInput.files;
    
    if (file) {
      const formData = new FormData();

      for (let i = 0; i < file.length; i++) {
        formData.append("files[]", file[i]);
      }
      console.log("datos: ", num_doc, eva_id)

      this.documentoService.uploadFile(num_doc, eva_id, formData).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    }    
  }

}
