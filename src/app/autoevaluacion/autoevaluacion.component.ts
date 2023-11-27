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
    });
    
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
}
