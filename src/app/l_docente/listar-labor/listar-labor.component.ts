import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { L_docente } from 'app/models/l_docente/docente';
import { LDocenteService } from 'app/services/l-docente.service';

@Component({
  selector: 'app-listar-labor',
  templateUrl: './listar-labor.component.html',
  styleUrls: ['./listar-labor.component.css']
})
export class ListarLaborComponent implements OnInit {
  docentes: L_docente[] = [];

  constructor(private lDocenteService: LDocenteService, 
    private router: Router) { }

  ngOnInit(): void {
    this.listLdocentes();
  }
  listLdocentes(){
    this.lDocenteService.getldocente().subscribe(
      (res: any) => {
        console.log(res);
        this.docentes = res.results; // Acceder a la propiedad 'results' para asignarla a la variable 'docentes'
      },
      err => console.log(err)
    );
  }
  deleteLdocente(lab_nombre: string){
    this.lDocenteService.deleteldocente(lab_nombre).subscribe(
      res=>{
        console.log(res);
        this.listLdocentes();
      },
      err=> console.log(err)
    );
  }
  // updateLdocente(lab_nombre: string){
  //   this.router.navigate(['/actualizar', lab_nombre]);
  //   console.log(this.router.navigate(['/actualizar', lab_nombre]))
  // }
  
  updateLdocente(lab_nombre: string){
    this.router.navigate(['/actualizar',lab_nombre]);
    console.log(this.router.navigate(['/actualizar', lab_nombre]))

  }
  
  
}

