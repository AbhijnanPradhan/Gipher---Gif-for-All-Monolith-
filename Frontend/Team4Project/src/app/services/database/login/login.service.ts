import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  signUp(user: UserInterface): Observable<any> {
    return this.httpClient.post('http://localhost:8080/register', user, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  loginUser(token: string) {
    localStorage.setItem("token", token);
  }
  loginStatus() {
    let token = localStorage.getItem("token");
    if (token != null && token !== undefined)
      return true;
    else
      return false;
  }

  fetchToken() {
    return localStorage.getItem("token");
  }

  tokenGenerator(login: any) {
    return this.httpClient.post(`${this.url}/token`, login);
  }

  logOut() {
    localStorage.removeItem("token");
    return true;
  }
}
