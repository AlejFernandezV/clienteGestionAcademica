import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EvaluationsService } from 'app/services/evaluations.service';
import { EvaluationResolvedI } from 'app/models/evaluations/evaluationsResolved.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-autoeva',
  templateUrl: './ver-autoeva.component.html',
  styleUrls: ['./ver-autoeva.component.css']
})
export class VerAutoevaComponent implements OnInit {

  eva_id: number;
  eva_resultado:string;
  eva_puntaje:string;
  eva_estado: string;

  formResults = new FormGroup({
    eva_estado: new FormControl('', [Validators.min(0), Validators.max(100)]),
  });

  constructor(
    public dialogRef: MatDialogRef<VerAutoevaComponent>,
    private evaService: EvaluationsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.eva_id = this.data.eva_id;
    this.getInfoEvaluation()
    console.log(this.data);
  }

  async getInfoEvaluation(){
    this.evaService.getEvaluationPorId(this.eva_id).subscribe(data => {
      if(data.status == 'success'){
        this.eva_resultado = data.results.eva_resultado
        this.eva_puntaje = data.results.eva_puntaje
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

  async updateStateEvaluation(){

    let newData = {
      eva_id: this.eva_id,
      eva_estado: this.eva_estado,
    }

    console.log(newData.eva_estado);
    

    this.evaService.updateEvaluationState(newData).subscribe(response => {
      if(response.status == 'success'){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Éxito",
          text: "Evaluación revisada exitosamente",
          showConfirmButton: true,
        })
      }else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Error",
          text: response.message,
          showConfirmButton: true,
        })
      }
    })
  }

  stateFinished(){
    this.eva_estado = "Revisado"
  }

  stateSuspended(){
    this.eva_estado = "Suspendido"
  }
}
