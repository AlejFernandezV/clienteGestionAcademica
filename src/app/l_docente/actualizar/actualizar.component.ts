import { Component } from '@angular/core';
import { LDocenteService } from '../../services/l-docente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {

  TiposLabores: [] = []
  lab_id: number = 0

  datosLaborDocente: any = {
    lab_nombre: '',
    lab_horas: 0,
    lab_id: 0,
    tl_descripcion: '',
  }

  newLdocente = new FormGroup({
    lab_nombre: new FormControl(''),
    lab_horas: new FormControl(''),
    tl_descripcion: new FormControl(''),
  })

  constructor(
    private listService: LDocenteService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.getLaborDocente(this.route.snapshot.paramMap.get('nombre'))
    this.getNombresTL()
  }

  getLaborDocente(nombre: string) {
    this.listService.getldocentes(nombre).subscribe(data => {
      this.newLdocente.patchValue({
        lab_nombre: data.results.lab_nombre,
        lab_horas: data.results.lab_horas,
        tl_descripcion: data.results.tl_descripcion,
      })
      this.lab_id = data.results.lab_id;
    })

  }

  updateLaborDocente(form: any) {
    this.datosLaborDocente.lab_nombre = form.lab_nombre
    this.datosLaborDocente.lab_horas = form.lab_horas
    this.datosLaborDocente.lab_id = this.lab_id
    this.datosLaborDocente.tl_descripcion = form.tl_descripcion

    this.listService.updateldocente(this.datosLaborDocente).subscribe(data => {
      if (data.status == 'success') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Usuario actualizado correctamente",
          timer: 2000,
        })
        this.router.navigate(['/listar-labor']);
      } else {
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

  getNombresTL() {
    this.listService.getTipoLabores().subscribe(data => {
      this.TiposLabores = data.results;
    })
  }

}