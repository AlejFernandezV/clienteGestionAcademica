import { Component } from "@angular/core";
import { LAutoevaluacionService } from "app/services/autoevaluacion/autoevaluacion.service";
import { UsuariosService } from "../services/usuarios.service";
import { UsuarioI } from "app/models/usuario/usuario.interface";
import { LDocenteService } from "app/services/l-docente.service";
import { L_docente } from "app/models/l_docente/docente";
import { PeriodoI } from "app/models/periodo/periodo.interface";
import { PeriodosService } from "app/services/periodos.service";
import { Router } from "@angular/router";
import { l_autoevaluacion } from "app/models/autoevaluacion/autoevaluacion";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { NotificacionService } from "app/services/notificacion/notificacion.service";
import { notificacionI } from "app/models/notificacion/notificacion.interface";

@Component({
  selector: "app-autoevaluacion",
  templateUrl: "./autoevaluacion.component.html",
  styleUrls: ["./autoevaluacion.component.css"],
})

export class AutoevaluacionComponent  {
  newAutoevaluacion:l_autoevaluacion = {
    // eva_id:0,
    lab_id:0,
    per_id:0,
    usu_id:0,
    eva_estado:'',
    eva_puntaje:0,
    eva_resultado:'',
}
  

  usuarios: UsuarioI[] = [];
  labores: L_docente[] = [];
  periodos: PeriodoI[] = [];
  lab_nombre_selec: string;

  formEva = new FormGroup({
    per_id: new FormControl('', Validators.required),
    usu_id: new FormControl('', Validators.required),
    lab_id: new FormControl('', Validators.required)
  });

  constructor(
    private listService: LAutoevaluacionService,
    private usuarioService: UsuariosService,
    private lDocenteService: LDocenteService,
    private periodoService: PeriodosService,
    private notiService: NotificacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listDocentes();
    this.listLdocentes();
    this.listPeriodos();
  }

  createEvaluation(form:any) {
    this.newAutoevaluacion.lab_id = form.lab_id
    this.newAutoevaluacion.usu_id = form.usu_id
    this.newAutoevaluacion.per_id = form.per_id

    this.crearNotificacion(this.newAutoevaluacion.usu_id,this.lab_nombre_selec)
    /*
    this.listService.createlAutoevaluacion(this.newAutoevaluacion).subscribe(data => {
      if(data.status == 'success'){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "¡Evaluación asignada correctamente!",
          timer: 2000,
        })
        this.router.navigate(["/table-list"]);
      }else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Error",
          text: data.message,
          showConfirmButton: true,
        })
      }
    });*/
  }

  listDocentes() {
    this.usuarioService.getUsuarios().subscribe(
      (res) => {
        this.usuarios = res.results;
      },
      (err) => console.log(err)
    );
  }

  listLdocentes() {
    this.lDocenteService.getldocente().subscribe(
      (res: any) => {
        this.labores = res.results;
      },
      (err) => console.log(err)
    );
  }

  listPeriodos() {
    this.periodoService.getPeriodos().subscribe((res) => {
        this.periodos = res.results;
      },
      (err) => console.log(err)
    );
  }

  seleccionarLabor(event: any): void {
    // Obtén el índice de la opción seleccionada
    const selectedIndex = event.target.selectedIndex - 1;

    // Verifica si labores está definido y no es nulo
    if (this.labores && this.labores.length > selectedIndex) {
      // Usa el índice para obtener el objeto correspondiente de tu arreglo
      const laborSeleccionada = this.labores[selectedIndex];

      // Verifica si laborSeleccionada está definido y no es nulo
      if (laborSeleccionada) {
        // Extrae el nombre y guárdalo en la variable
        this.lab_nombre_selec = laborSeleccionada.lab_nombre;
        
      } else {
        console.error('El objeto laborSeleccionada está indefinido o nulo.');
      }
    } else {
      console.error('Labores no está definido o no contiene suficientes elementos.');
    }
  }

  crearNotificacion(_usu_id:number, _lab_nombre:string){
    let noti: notificacionI = {
      usu_id: _usu_id,
      noti_contenido: `Se le asignó una nueva autoevaluación para ${_lab_nombre}`,
      noti_ruta: "/table-list",
      noti_estado: "Pendiente",
    }
    console.log(noti);

    this.notiService.postNotification(noti).subscribe(data =>{
      if(data.status == "success"){
        console.log("Se creó la notificación");
      }
      else{
        console.log(data.message);
      }
    })
  }
}
