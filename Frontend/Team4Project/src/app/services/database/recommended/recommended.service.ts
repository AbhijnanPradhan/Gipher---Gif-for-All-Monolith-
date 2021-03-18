import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataBlock } from 'src/app/interfaces/ApiDataInterface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RecommendedService {

  private recommendedSubject: BehaviorSubject<Array<DataBlock>> = new BehaviorSubject(new Array<DataBlock>());
  private messageSubject: BehaviorSubject<String> = new BehaviorSubject(new String());
  private recommends: Array<DataBlock> = [];

  private bearerToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYXlhbjE2IiwiaXNBZG1pbiI6dHJ1ZSwiZXhwIjoxNjE2MDM0NDU5LCJpYXQiOjE2MTYwMTY0NTl9.TrwTsnc9fh6iOps4Y0hMJ2If2qMuDbgPNs-CfxhJjL4r21wqy4KRoXUJdMTQpj4BvaB9TEM4K-YX4dN3vCo5hg';
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
