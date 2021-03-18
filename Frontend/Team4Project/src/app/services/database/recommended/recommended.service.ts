import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataBlock } from '../../../interfaces/ApiDataInterface';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class RecommendedService {

  private recommendedSubject: BehaviorSubject<Array<DataBlock>> = new BehaviorSubject(new Array<DataBlock>());
  private messageSubject: BehaviorSubject<String> = new BehaviorSubject(new String());
  private recommends: Array<DataBlock> = [];

  private bearerToken = this.loginService.fetchToken();
  private userId: string | null = this.loginService.fetchUserId();
  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:8080')
    .set('Authorization', `Bearer ${this.bearerToken}`);

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getRecommended() {
    this.http.get<Array<any>>(`http://localhost:8080/recommended/get?userId=${this.userId}`, { headers: this.headers })
      .subscribe(data => {
        console.log('GetRecommended response', data);
        this.recommends = data;
        this.recommendedSubject.next(this.recommends);
      });
  }

  addRecommended(data: DataBlock) {
    const headers = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
    };
    this.http.post<any>(`http://localhost:8080/recommended/add?userId=${this.userId}`, data, { headers: this.headers })
      .subscribe(data => {
        console.log('AddRecommended response', data);
        this.messageSubject.next(data.message);
        if (data.message == "Success") {
          this.recommends.push(data);
          this.recommendedSubject.next(this.recommends);
        }
      }, error => {
        this.messageSubject.next(error);
      });
  }

  getBehaviourSubject(): BehaviorSubject<Array<DataBlock>> {
    return this.recommendedSubject;
  }

  getMessageSubject(): BehaviorSubject<String> {
    return this.messageSubject;
  }

  setToken(token: string) {
    this.bearerToken = token;
  }
  setUserId(userId: string) {
    this.userId = userId;
  }

}
