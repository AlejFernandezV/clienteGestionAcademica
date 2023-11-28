import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioI } from 'app/models/usuario/usuario.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-docentes',
  templateUrl: './list-docentes.component.html',
  styleUrls: ['./list-docentes.component.css']
})
export class ListDocentesComponent implements OnInit {

  usuarios: UsuarioI[] = [];

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.listDocentes();
  }

  listDocentes(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarios = res.results;
        this.usuarios.sort((a, b) => {
          if (a.usu_nombre > b.usu_nombre) {
            return 1;
          } else if (a.usu_nombre < b.usu_nombre) {
            return -1;
          } else {
            return 0;
          }
        });
      },
      err => console.log(err)
    );

  }
  
  deleteDocente(num_doc: number){
    this.usuarioService.deleteUsuario(num_doc).subscribe(
      res=>{
        if(res.code === 200){
          Swal.fire({
            title: 'Docente eliminado',
            icon: 'success',
            timer: 2000,
          });

          this.listDocentes();
        }else{
          Swal.fire({
            title: 'Error al eliminar docente',
            icon: 'error',
            text: res.message,
            timer: 2000,
          });

          this.listDocentes();
        }
      },
      err=> console.log(err)
    );
  }
}
