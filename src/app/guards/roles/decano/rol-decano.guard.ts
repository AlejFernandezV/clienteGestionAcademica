import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolDecanoGuard implements CanActivate {
  constructor() { }

  checkPermisos(){
    let rol = localStorage.getItem('usu_rol')
    if(rol == 'Decano' || rol == 'Coordinador'){
      return true
    }else{
      return false
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPermisos();
  }
  
}
