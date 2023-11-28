import { Component, OnInit } from '@angular/core';
import { LAutoevaluacionService } from 'app/services/autoevaluacion/autoevaluacion.service';
import { l_autoevaluacion } from 'app/models/autoevaluacion/autoevaluacion';
@Component({
  selector: 'app-l-autoevaluacion',
  templateUrl: './l-autoevaluacion.component.html',
  styleUrls: ['./l-autoevaluacion.component.css']
})
export class LAutoevaluacionComponent implements OnInit {
 
  
lautoevaluacion: l_autoevaluacion[] = [];

  constructor(private autoevaluacionService: LAutoevaluacionService,) { }


  ngOnInit(): void {
this.listAutoevaluaciones();
  }

  listAutoevaluaciones(){
    this.autoevaluacionService.getlAutoevaluacion().subscribe(
      res => {
        this.lautoevaluacion = res.results;
      
      },
      err => console.log(err)
    );

  }


}
