import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioI } from 'app/models/usuario/usuario.interface';
import { Router } from '@angular/router';

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
      },
      err => console.log(err)
    );

  }
  
  deleteDocente(id: number){
    this.usuarioService.deleteUsuario(id).subscribe(
      res=>{
        console.log('Docente eliminado');
        this.listDocentes();
      },
      err=> console.log(err)
    );
  }

  updateDocente(id: number){
    this.router.navigate(['/update-docente'+id]);
  }

}
