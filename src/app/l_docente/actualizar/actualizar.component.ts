import { Component, OnInit } from '@angular/core';
import { L_docente } from '../../models/l_docente/docente';
import { LDocenteService } from '../../services/l-docente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent  {
  docente: L_docente;
  nombreDocente: string; // Suponiendo que tienes el nombre del docente

  // newDocente:L_docente ={
  //   lab_id:0,
  //   lab_horas: 0,
  //   tl_descripcion: '',
  //   lab_nombre: '',
  //   tl_codigo:'',
  //   tl_id:0,
  // }
  constructor(
    private listService : LDocenteService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ){

  }


  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      const nombre = params.get('nombre'); // Obtener el nombre del parámetro de la URL
      this.nombreDocente = nombre; // Asignar el nombre al campo nombreDocente
      this.obtenerDatosDocente(nombre); // Llamar al método para obtener los datos del docente
    });
  }

  obtenerDatosDocente(nombre: string) {
    this.listService.obtenerDocentePorNombre(nombre).subscribe(
      (data: L_docente[]) => {
        if (data && data.length > 0) {
          this.docente = data[0];
          console.log('Datos del docente:', this.docente);
        } else {
          console.log('No se encontraron datos del docente');
        }
      },
      error => {
        console.error('Error al obtener los datos del docente:', error);
      }
    );
  }

  // Método para actualizar el docente
  actualizarDocente() {
    if (this.nombreDocente && this.docente) {
      this.listService.actualizarDocentePorNombre(this.nombreDocente, this.docente).subscribe(
        (data: L_docente) => {
          console.log('Docente actualizado:', data);
          // Realizar acciones después de la actualización exitosa
        },
        error => {
          console.error('Error al actualizar el docente:', error);
          // Manejar el error
        }
      );
    }
  }
 
}