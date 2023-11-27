import { Component} from '@angular/core';
import { L_docente } from '../../models/l_docente/docente';
import { LDocenteService } from '../../services/l-docente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent  {
 

  datosDocente:L_docente;
  newLdocente = new FormGroup({
    lab_nombre: new FormControl(''),
    lab_horas: new FormControl(''),
    tl_id: new FormControl(''),
})

  constructor(
    private listService : LDocenteService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ){

  }

  ngOnInit() {
   let Ldocenteid = this.activeRoute.snapshot.paramMap.get('nombre')
   this.listService.updateldocente(Ldocenteid,this.datosDocente).subscribe(data=>{
    
    console.log(data)
   })
   console.log(Ldocenteid)
  }


}