import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from 'app/services/evaluations.service';
import { EvaluationI } from 'app/models/evaluations/evaluations.interface';
import { DocumentsService } from 'app/services/documents.service';
import Swal from 'sweetalert2';
import { UsuariosService } from 'app/services/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InyeccionesService } from 'app/services/inyecciones.service';
import {EnviarAutoevaComponent} from 'app/enviar-autoeva/enviar-autoeva.component';
import { VerAutoevaComponent } from 'app/ver-autoeva/ver-autoeva.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  evaluaciones: EvaluationI [] = [];
  rol: string = localStorage.getItem('usu_rol');
  totalHoras: number = 0 ;
  archivoPDF? ;
  buttonCreateEvaluation: number = 0;
  buttonBuscar: number = 0;
  buttonFile: number = 0;
  num_doc= localStorage.getItem('usu_num_doc')
  name: string = ""
  identificacion: string = ""

  constructor(
    private usuario: UsuariosService,
    private evalutionsService: EvaluationsService, 
    private documentoService: DocumentsService,
    private inyeccion: InyeccionesService,
    private matDialogSol: MatDialog,
    private matDialogRev: MatDialog,
  ) { }

  autoEvaluacionDocenterForm = new FormGroup({
    eva_resultado: new FormControl('', Validators.required),
    eva_puntaje: new FormControl('', Validators.required),
    sugerencia_descripcion: new FormControl('', Validators.required)
  })

  buscarPorIdentificacionForm = new FormGroup({
    usu_num_doc: new FormControl('', [Validators.required, this.inyeccion.sqlInjectionValidator])
  })

  buscarPorPeriodoForm = new FormGroup({
    per_nombre: new FormControl('', [Validators.required, this.inyeccion.sqlInjectionValidator])
  })

  buscarPorNomPerNumDocForm = new FormGroup({
    per_nombre_doc: new FormControl('', [Validators.required, this.inyeccion.sqlInjectionValidator])
  })

  ngOnInit() {
    this.getEvaluation() 
  }

  getUsuario(){
    this.usuario.getUsuarioPorId(this.num_doc).subscribe(data => {
      if(data.status== 'success'){
        this.name = data.results.usu_nombre + " " + data.results.usu_apellido
      }
    })
  }

  getEvaluation() {
    this.getUsuario()
    if(this.rol === 'Decano'){
      this.evalutionsService.getEvaluationForDean().subscribe((data: any) => {
        if (data.results && data.results.length > 0){
          this.evaluaciones = data.results;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Evaluaciones disponibles.',
            showConfirmButton: true,
          })
        } else{
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Oops...',
            text: 'No hay evaluaciones disponibles.',
            showConfirmButton: true,
          })
        }
      });    
    }else if(this.rol === 'Coordinador'){
      this.evalutionsService.getEvaluationForCoord().subscribe((data: any) => {
        if (data.results && data.results.length > 0){
          this.evaluaciones = data.results;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Evaluaciones disponibles.',
            showConfirmButton: true,
          })
        } else{
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Oops...',
            text: 'No hay evaluaciones disponibles.',
            showConfirmButton: true,
          })
        }
      });
    }else{
      this.evalutionsService.getEvaluationPorNumDoc(Number(this.num_doc)).subscribe((data: any) => {
        if (data.results && data.results.length > 0){
          this.evaluaciones = data.results;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Evaluaciones disponibles, por favor completelas.',
            showConfirmButton: true,
          })
        } else{
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Oops...',
            text: 'No hay evaluaciones disponibles.',
            showConfirmButton: true,
          })
        }
      });
    }  
    this.getTotalHours()
  }

  getTotalHours(){
    this.totalHoras = 0
    this.evalutionsService.getEvaluationPorNumDoc(Number(this.num_doc)).subscribe(() =>{
      for (let i = 0; i < this.evaluaciones.length; i++) { 
        this.totalHoras += this.evaluaciones[i].lab_horas; 
      }
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

      this.documentoService.uploadFile(27,5,formData).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    }    
  }

  getUserRol(){
    if(this.rol === 'Coordinador' || this.rol === 'Decano'){
      return this.buttonCreateEvaluation = 1;
    } else{
      return this.buttonCreateEvaluation = 0;
    }
  }

  getUserRolDocente(){
    if(this.rol === 'Planta tiempo completo' || this.rol == 'Planta medio tiempo' ||this.rol === 'Ocasional tiempo completo' || this.rol == 'Ocasional medio tiempo'){
      return this.buttonCreateEvaluation = 1;
    } else{
      return this.buttonCreateEvaluation = 0;
    }
  }
  getUserTipoDocente(){
    if(this.rol === 'Ocasional tiempo completo' || this.rol == 'Ocasional medio tiempo'){
      return this.buttonFile = 1;
    } else{
      return this.buttonFile = 0;
    }
  }
  searchByNameLN(form: any){
    let formDefinitive = {
      usu_num_doc: form.usu_num_doc
    }
    let num_doc = new FormControl(formDefinitive.usu_num_doc, [Validators.required, this.inyeccion.sqlInjectionValidator])
    if (num_doc.value == ''){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "Oops...",
        text: "Por favor ingrese un periodo",
        showConfirmButton: true,
      })
    }else if(!num_doc.valid){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Error",
        text: "Guau!, Intentas hacer una inyección SQL, hijo de la gran puta! 🤬🖕🏽🤡",
        showConfirmButton: true,
      })
    }else{
      this.evalutionsService.getEvaluationPorNumDoc(form.usu_num_doc).subscribe(data => {
        if(data.results && data.results.length > 0){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El docente tiene evaluaciones',
            showConfirmButton: true,
          })
          this.evaluaciones = data.results;
        }else{
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

  getEvaluacionPorPeriodo(form: any){
    let formDefinitive = {
      per_nombre: form.per_nombre
    }
    let per_nombre = new FormControl(formDefinitive.per_nombre, [Validators.required, this.inyeccion.sqlInjectionValidator])
    if (per_nombre.value == ''){

      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "Oops...",
        text: "Por favor ingrese un periodo",
        showConfirmButton: true,
      })
    }else if(!per_nombre.valid){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Error",
          text: "Guau!, Intentas hacer una inyección SQL, hijo de la gran puta! 🤬🖕🏽🤡",
          showConfirmButton: true,
        })
      }else{
        this.evalutionsService.getEvaluationPorPeriodo(form.per_nombre).subscribe(data =>{
          if(data.results && data.results.length > 0){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Evaluaciones encontradas',
              showConfirmButton: true,
            })
            this.evaluaciones = data.results;
          }else{
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: "Error",
              text: data.message,
              showConfirmButton: true,
            })
          }
        })
      }
    
  }

  getEvaluationPorNomPerNumDoc(form:any){
    let formDefinitive = {
      per_nombre_doc: form.per_nombre_doc
    }
    let per_nombre_doc = new FormControl(formDefinitive.per_nombre_doc, [Validators.required, this.inyeccion.sqlInjectionValidator])
    if (per_nombre_doc.value == ''){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "Oops...",
        text: "Por favor ingrese un periodo",
        showConfirmButton: true,
      })
    }else if(!per_nombre_doc.valid){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Error",
        text: "Guau!, Intentas hacer una inyección SQL, hijo de la gran puta! 🤬🖕🏽🤡",
        showConfirmButton: true,
      })
    }else {
      if(form.per_nombre_doc){
        this.evalutionsService.getEvaluationPorNomPerNumDoc(form.per_nombre_doc, Number(this.num_doc)).subscribe(data => {
          if(data.results && data.results.length > 0){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Evaluaciones encontradas',
              showConfirmButton: true,
            })
            this.evaluaciones = data.results;
          }else{
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: "Error",
              text: data.message,
              showConfirmButton: true,
            })
          }
        })
      }
    }
  }

  openDialogSolved(eva_id : number,usu_rol:string,labor:string,tipo_labor:string){
    const dialogRef = this.matDialogSol.open(EnviarAutoevaComponent, {
      width: '800px',
      height: '450px',
      data: {
        eva_id,
        usu_rol,
        labor,
        tipo_labor
      }
    });
  
    this.aftClosed(dialogRef)
  }

  openDialogReview(eva_id : number,labor:string){
    this.matDialogRev.open(VerAutoevaComponent, {
      width: '450px',
      height: '320px',
      data: {
        eva_id,
        labor
      }
    });
  }

  async aftClosed(dialogRef:any){
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        setTimeout(() => this.getEvaluation(),2000);
      }
    })
  }

  openAdv(message:string){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: "Advertencia",
      text: message,
      showConfirmButton: true,
    })
  }
}
