import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  constructor(){}
  
  checkPermisos(){
    let rol = localStorage.getItem('usu_rol')
    if(rol == 'Coordinador' || rol == 'Decano ' || rol == 'Planta tiempo completo' || rol == 'Planta medio tiempo' || rol == 'Ocasional tiempo completo' || rol == 'Ocasional medio tiempo'){
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
