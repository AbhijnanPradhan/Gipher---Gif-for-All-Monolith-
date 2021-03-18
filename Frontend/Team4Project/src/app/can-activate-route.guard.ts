import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/database/login/login.service';
import { RouterService } from './services/router.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private router: RouterService, private loginService: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let res = this.loginService.loginStatus();
    if (!res)
      this.router.routeToLogin();
    return res;
    // const promise = this.authService.isUserAuthenticated(this.authService.getBearerToken());
    // return promise.then(res => {
    //   if (res) {
    //     return true;
    //   } else {
    //     this.router.routeToLogin();
    //     return false;
    //   }
    // });
  }
}
