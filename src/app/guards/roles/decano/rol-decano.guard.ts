import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
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
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPermisos();
  }
  
}
