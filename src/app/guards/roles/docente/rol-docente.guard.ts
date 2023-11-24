import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolDocenteGuard implements CanActivate {

  constructor(private authService: AuthService) { }
  checkPermisos(){
    let rol = this.authService.getRol()
    if(rol == 'Planta tiempo completo'){
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
