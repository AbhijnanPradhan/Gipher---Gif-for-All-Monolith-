import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterService } from './services/router.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private router: RouterService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // const promise = this.authService.isUserAuthenticated(this.authService.getBearerToken());
    // return promise.then(res => {
    //   if (res) {
    //     return true;
    //   } else {
    //     this.router.routeToLogin();
    //     return false;
    //   }
    // });
    return true;
  }
}
