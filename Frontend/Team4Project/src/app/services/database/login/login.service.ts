import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInterface } from 'src/app/interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080";
  private messageSubject: BehaviorSubject<String> = new BehaviorSubject(new String());

  constructor(private httpClient: HttpClient) { }

  signUp(user: UserInterface, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:8080/user/register?password=' + password, user, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  loginUser(userId: string, password: string) {
    this.httpClient.post<any>('http://localhost:8080/authenticate', {
      'userId': userId,
      'password': password
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).subscribe(data => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      this.messageSubject.next(data.message);
    }, error => {
      window.alert("Please check your internet");
    })
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

  fetchUserId() {
    return localStorage.getItem("userId");
  }

  logOut() {
    localStorage.removeItem("token");
    console.log("token remove");
    return true;
  }

  getMessageSubject(): BehaviorSubject<String> {
    return this.messageSubject;
  }
}
