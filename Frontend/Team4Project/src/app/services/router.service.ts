import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private router: Router, private location: Location) { }
  routeToDashboard() {
    this.router.navigate(['home']);
  }
  routeToLogin() {
    this.router.navigate(['login']);
  }
  routeToError() {
    this.router.navigate(['error']);
  }
  routeToCardDetails(idParam: string){
    this.router.navigate(['home/details', idParam ]);
  }
}
