import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataBlock } from '../../../interfaces/ApiDataInterface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RecommendedService {

  private recommendedSubject: BehaviorSubject<Array<DataBlock>> = new BehaviorSubject(new Array<DataBlock>());
  private messageSubject: BehaviorSubject<String> = new BehaviorSubject(new String());
  private recommends: Array<DataBlock> = [];

  private bearerToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYXlhbjE2IiwiaXNBZG1pbiI6dHJ1ZSwiZXhwIjoxNjE2MDY2NDA2LCJpYXQiOjE2MTYwNDg0MDZ9.Z7-4jYjZNG5mM80D1ZEvhyVZrhGlWhhTAaqHOURVk9SoBkpUsdM5HIBxqLxBwQmdzlBWoN9tiAB2NYRXF4hFXQ';
  private userId:string = 'Abhijnan3';
  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:8080')
    .set('Authorization', `Bearer ${this.bearerToken}`);

  constructor(private http: HttpClient) { }

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
    this.http.post<any>('http://localhost:8080/recommended/add?userId=Abhijnan3', data, { headers: this.headers })
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

  setToken(token:string){
    this.bearerToken = token;
  }
  setUserId(userId:string){
    this.userId = userId;
  }

}
