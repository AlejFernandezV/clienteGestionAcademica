import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from '../../services/login.service'
import Swal from 'sweetalert2';
import { LoginI } from 'app/models/login/login.interface';
import { log } from 'console';
import { InyeccionesService } from 'app/services/inyecciones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('container') container: ElementRef;

  loading: any = true

  constructor(
    private api: LoginService,
    private router: Router,
    private render2: Renderer2,
    private inyeccion: InyeccionesService) { }

  perfil: any[] = []

  contenedor: any

  erroStatus: boolean = false
  erroMsg: any = ""

  loginForm = new FormGroup({
    usu_email: new FormControl('', [Validators.required, Validators.email, this.inyeccion.sqlInjectionValidator]),
    usu_password: new FormControl('', [Validators.required, this.inyeccion.sqlInjectionValidator])
  })

  ngOnInit(): void {
    this.checkLocalStorage()
  }

 
  async onLoginUser(form: any) {
    let formdefinitive: LoginI = {
      usu_email: form.usu_email.toString(),
      usu_password: form.usu_password
    }
    let email = new FormControl(formdefinitive.usu_email, [Validators.required, Validators.email, this.inyeccion.sqlInjectionValidator]);
    let password = new FormControl(formdefinitive.usu_password, [Validators.required, this.inyeccion.sqlInjectionValidator]);
    if (!email.valid || !password.valid) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Error",
        text: "Guau!, Intentas hacer una inyección SQL, hijo de la gran puta :D",
        showConfirmButton: true,
      })
    }else{
      this.api.postLogin(formdefinitive).subscribe(data => {
        if (data.status == 'success') {
          this.loading = false//save the id of user in localStorage
          localStorage.setItem('usu_num_doc', data.results.usu_num_doc)
          localStorage.setItem('usu_rol', data.results.rol_descripcion)
          // this.cookies.set('id_user', data.results.id)//save the token in cookie service
          this.redirectTo(data)
          //this.functionRedirigido()
          this.checkUserRole()
        } else {
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

  checkUserRole(){
    let userRole = localStorage.getItem('usu_rol')
    if(userRole === 'Coordinador' ||  userRole === 'Decano') {
      this.router.navigate(['dashboard'])
    }else this.router.navigate(['user-profile'])
  }

  onLoginAprendiz(form: any) {
    let formCompleted = {
      identificacion: form.identificacion.toString(),
      password: form.password
    }
    /*this.api.loginByAprendiz(formCompleted).subscribe(data => {
      if (data.status == 'success') {
        this.loading = false
        localStorage.setItem('id_aprendiz', data.results.id)//save the id of user in localStorage
        localStorage.setItem('id_asignacion', data.results.id_asignacion)//save the id of user in localStorage
        // this.cookies.set('id_user', data.results.id)//save the token in cookie service
        this.redirectTo(data)
        this.getMyPerfiles(data.results.perfil_id)

      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Error",
          text: data.message,
          showConfirmButton: true,
        })
      }
    })*/
  }
  checkLocalStorage() {
    if (localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  showPassword() {//ocultar password
    const change = document.getElementById('password') as HTMLInputElement
    if (change.type === 'password') {
      change.type = 'text'
    } else {
      change.type = 'password'
    }
  }

  redirectTo(data) {
    localStorage.setItem('token', data.results.token)//save the token in localStorage
    // this.cookies.set('token', data.results.token)//save the token in cookie service
    localStorage.setItem('perfil_id', data.results.perfil_id)//save the id of user in localStorage
    // this.cookies.set('perfil_id', data.results.perfil_id)//save the token in cookie service
  }

  clickSignIn() {
    const container = this.container.nativeElement
    this.render2.removeClass(container, "right-panel-active")
  }
  clickSignUp() {
    const container = this.container.nativeElement
    this.render2.addClass(container, "right-panel-active")
  }
  /*async getMyPerfiles(idPerfil: number | string) {
    await this.api.getMyModulesByPerfil(idPerfil).subscribe(data => {
      if (data.status == 'success') {
        localStorage.setItem('data_perfil', JSON.stringify(data.results))
        this.perfil = data.results
        this.getAllItemModule()
      }
    })
  }

  async getAllItemModule() {
    await this.api.getAllItemModule().subscribe(modules => {
      localStorage.setItem('modules', JSON.stringify(modules.results))
      this.router.navigate(['dashboard'])
      this.loading = true
    })
  }*/

  /*functionRedirigido() {
    this.router.navigate([
      'dashboard'
    ])
  }*/

  /*onLogOut(){
    localStorage.clear()
    this.router.navigate(['login']);
  }*/
}
