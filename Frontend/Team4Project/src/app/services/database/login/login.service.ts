import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signUp(user: UserInterface): Observable<any> {
    return this.http.post('http://localhost:8080/user/register', user, {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
