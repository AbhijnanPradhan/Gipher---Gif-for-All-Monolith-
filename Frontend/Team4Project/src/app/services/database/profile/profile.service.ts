import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInterface } from 'src/app/interfaces/UserInterface';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userDataSubject: BehaviorSubject<UserInterface> = new BehaviorSubject(new UserInterface());
  private messageSubject: BehaviorSubject<String> = new BehaviorSubject(new String());
  private user: UserInterface = new UserInterface();

  private bearerToken = this.loginService.fetchToken();
  private userId: string | null = this.loginService.fetchUserId();
  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:8080')
    .set('Authorization', `Bearer ${this.bearerToken}`);

  constructor(private http: HttpClient,private loginService: LoginService) { }

  // @GetMapping("/get")
  getUserDetails(){
  // @RequestParam String userId
  this.http.get<any>(`http://localhost:8080/user/get?userId=${this.userId}`, { headers: this.headers })
      .subscribe(data => {
        console.log('Get User response', data);
        this.user = data;
        this.userDataSubject.next(this.user);
      }, error => {
        this.messageSubject.next(error);
      });
  }

  // Getter and setters
  getBehaviourSubject(): BehaviorSubject<UserInterface> {
    return this.userDataSubject;
  }

  getMessageSubject(): BehaviorSubject<String> {
    return this.messageSubject;
  }
}
