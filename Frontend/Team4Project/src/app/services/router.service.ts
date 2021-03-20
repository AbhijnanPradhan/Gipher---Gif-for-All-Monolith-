import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private router: Router, private location: Location) { }

  routeToLogin() {
    this.router.navigate(['login']);
  }
  routeToError() {
    this.router.navigate(['error']);
  }
  routeToCardDetails(idParam: string){
    this.router.navigate(['home/details', idParam ]);
  }
  routeToProfile(){
    this.router.navigate(['profile']);
  }
  routeToFavorites(){ 
    this.router.navigate(['favs']);
  }
  routeToHome(){
    this.router.navigate(['home']);
  }
  routeToRecommended(){
    this.router.navigate(['recommended']);
  }
  routeToSignup(){
    this.router.navigate(['signup']);

  }
  routeToHomeRefresh(){
    this.router.navigate(['home', {refresh: true}]);
  }
}
