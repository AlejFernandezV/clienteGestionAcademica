import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { log } from 'console';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router) { }

  acessToken : boolean = false
  redirectTo() {
    if(localStorage.getItem('token') === null || localStorage.getItem('token') === ""){
      this.acessToken = false
      this.route.navigate(['login'])

    }else{
      this.acessToken = true
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.redirectTo()
    return this.acessToken
  }
  
}



