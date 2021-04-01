import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    //  this.authService.authChanged.subscribe(loggedIn => 
    //    this.isLoggedIn = loggedIn);

      let isLoggedIn = sessionStorage.getItem("email") ? true : false;
      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigateByUrl("/login")
        return false;
      }
   }
  
}
