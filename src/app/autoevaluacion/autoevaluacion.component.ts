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
import Publicador from "app/Observer/publicador";
import { NotificacionService } from "app/services/notificacion/notificacion.service";
import { notificacionI } from "app/models/notificacion/notificacion.interface";
import Swal from "sweetalert2";
import Notificacion from "app/models/notificacion/notificacionCrear";
import { NOTIFIACIONLIST } from "app/api-constants/api-constants.component";

@Component({
  selector: "app-autoevaluacion",
  templateUrl: "./autoevaluacion.component.html",
  styleUrls: ["./autoevaluacion.component.css"],
})
export class AutoevaluacionComponent extends Publicador {
  newAutoevaluacion: l_autoevaluacion = {
    eva_id: 0,
    lab_id: 0,
    per_id: 0,
    usa_id: 0,
    eva_estado: "",
    eva_puntaje: 0,
    eva_resultado: "",
  };

  lab_nombre: string = '';
  usuarios: UsuarioI[] = [];
  docentes: L_docente[] = [];
  periodos: PeriodoI[] = [];

  constructor(
    private listService: LAutoevaluacionService,
    private usuarioService: UsuariosService,
    private lDocenteService: LDocenteService,
    private periodoService: PeriodosService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.listDocentes();
    this.listLdocentes();
    this.listPeriodos();
  }

  agregarAutoevaluacion() {
    this.listService.createlAutoevaluacion(this.newAutoevaluacion).subscribe(data => {
      if(data.status === "success"){
        let dataNoti: notificacionI = {
          usu_id: this.newAutoevaluacion.usa_id,
          noti_content: `Se le asignó una evaluación para ${this.lab_nombre}`,
          noti_ruta: '/table-list',
          noti_estado: 'Pendiente'
        }
        const notificacion = new Notificacion(dataNoti)
        
        super.agregarSubscriptor(notificacion)
        super.agregarSubscriptor(NOTIFIACIONLIST)
        super.notificarSubscriptores({usu_id: this.newAutoevaluacion.usa_id, lab_nombre:this.lab_nombre})        

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "¡Evaluación creada correctamente!",
          timer: 2000,
        })
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
    this.router.navigate(["/lautoevaluacion"]);
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
        this.docentes = res.results;
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

  seleccionarLabNombre(event: any): void {
    this.lab_nombre = event.target.value;
  }
}
