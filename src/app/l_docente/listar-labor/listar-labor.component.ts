import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { L_docente } from 'app/models/l_docente/docente';
import { LDocenteService } from 'app/services/l-docente.service';
import Swal from 'sweetalert2';

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
    // this.listLdocentes()

  }
  deleteLdocente(lab_nombre: string){
    this.lDocenteService.deleteldocente(lab_nombre).subscribe(
      res=>{
        if(res.code === 200){
          Swal.fire({
            title: 'Labor Docente se  eliminado corectamente',
            icon: 'success',
            timer: 2000,
          });

          this.listLdocentes();
        }else{
          Swal.fire({
            title: 'Error al eliminar Labor docente',
            icon: 'error',
            text: res.message,
            timer: 2000,
          });

          this.listLdocentes();
        }
      },
      err=> console.log(err)
    );
  }

  
}

