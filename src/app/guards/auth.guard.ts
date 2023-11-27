import { Injectable } from '@angular/core';
import { CanActivate, Router,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

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

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.redirectTo()
    return this.acessToken
  }
  
}



