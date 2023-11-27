import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EvaluationsService } from 'app/services/evaluations.service';
import { EvaluationResolvedI } from 'app/models/evaluations/evaluationsResolved.interface';
import Swal from 'sweetalert2';

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
  
  
  formResults = new FormGroup({
    eva_puntaje: new FormControl('', Validators.required),
    eva_resultado: new FormControl('', [Validators.min(0), Validators.max(100)]),
  });

  constructor(
    public dialogRef: MatDialogRef<EnviarAutoevaComponent>,
    private evaService: EvaluationsService,
    @Inject(MAT_DIALOG_DATA) public data: any
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

}
