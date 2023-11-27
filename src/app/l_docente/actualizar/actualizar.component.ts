import { Component} from '@angular/core';
import { L_docente } from '../../models/l_docente/docente';
import { LDocenteService } from '../../services/l-docente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent  {
  lab_nombre_old: string;
  newLabor:any ={
    lab_nombre_old: '',
    lab_horas: 0,
    lab_nombre: '',
    tl_id:0,
  }

  TiposLabores:[] =[]
  tl_descripcion:string;
 
  formLabor = new FormGroup({
    lab_nombre: new FormControl('',Validators.required),
    lab_horas: new FormControl('',[Validators.required, Validators.min(12), Validators.max(64)]),
    tl_descripcion: new FormControl('',Validators.required)
  })


  constructor(
    private ldService : LDocenteService,
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit() {
    this.getNombresTL()
   this.getLabor(this.route.snapshot.paramMap.get('nombre'))
  }
  getLabor(nombre: string){
    console.log('name')
    console.log(nombre)
    this.ldService.getldocentes(nombre).subscribe(data =>{
      this.formLabor.patchValue({
        lab_nombre: data.results.lab_nombre,
        lab_horas: data.results.lab_horas,
        tl_descripcion: data.results.tl_descripcion
      })
      console.log('s')

      this.lab_nombre_old = data.results.lab_nombre;
    })
  }
  updateLabor(form:any){
    this.newLabor.lab_horas = form.lab_horas
    this.newLabor.lab_nombre = form.lab_nombre
    this.newLabor.tl_id = this.obtenerIdTL(form.tl_descripcion)
    this.newLabor.lab_nombre_old = this.lab_nombre_old;


    this.ldService.updateldocente(this.newLabor).subscribe(data=>{
      if(data.code == 200){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Labor actualizada correctamente",
          timer: 2000,
        })
        this.router.navigate(['/listar-labor']);
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
  getNombresTL(){
    this.ldService.getTipoLabores().subscribe(data => {
      this.TiposLabores = data.results;
    })
  }
  obtenerIdTL(tl_descripcion:string){
    switch (tl_descripcion) {
      case "Docencia":
        return 1;
      case "Trabajos Docencia":
        return 2;
      case "Proyectos Investigación":
        return 3;
      case "Trabajos Investigación":
        return 4;
      case "Administración":
        return 5;
      case "Asesoría":
        return 6;
      case "Servicios":
        return 7;
      case "Extensión":
        return 8;
      case "Capacitación":
        return 9;
      case "Otros Servicios":
        return 10;
    }
  }
  //get
  get nombre() {
    return this.formLabor.get('lab_nombre') as FormControl;
  }
  get horas() {
    return this.formLabor.get('lab_horas') as FormControl;
  }
  get tipoLabor() {
    return this.formLabor.get('tl_descripcion') as FormControl;
  }

}