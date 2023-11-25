import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolDocenteGuard implements CanActivate {
  rol = this.authService.getRol()
  constructor(private authService: AuthService) { }

  checkPermisos(){
    let rol = this.getRolUsuario(this.rol)
    if(rol == 'Pla' || rol == 'Cat'){
      return true
    }else{
      return false
    }
  }

  getRolUsuario(rol : string){
    if (rol) {
      rol = rol.substring(0, 3);
    }
    return rol;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPermisos();
  }
  
}
