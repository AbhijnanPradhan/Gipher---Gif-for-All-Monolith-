import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataBlock } from 'src/app/interfaces/ApiDataInterface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RecommendedService {

  private recommendedSubject: BehaviorSubject<Array<DataBlock>> = new BehaviorSubject(new Array<DataBlock>());
  private messageSubject: BehaviorSubject<String> = new BehaviorSubject(new String());
  private recommends: Array<DataBlock> = [];

  private bearerToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYXlhbjE2IiwiaXNBZG1pbiI6dHJ1ZSwiZXhwIjoxNjE1OTkyNzc2LCJpYXQiOjE2MTU5NzQ3NzZ9.8jxmxdp0d1XrzvqBpVZ3RibQOANmlyNS3TRgZVH_ZH0cPL_005bkPV0ZavG2xume1G4H1U0pzyExFL01XsH0Vg';

  // private headers = {
  //   headers: {
  //     'Authorization': `Bearer ${this.bearerToken}`,
  //     'Content-Type': 'application/json'
  //   }
  // };
  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:8080')
    .set('Authorization', `Bearer ${this.bearerToken}`);

  constructor(private http: HttpClient) { }

  getRecommended() {
    console.log('Called');
    this.http.get<Array<any>>('http://localhost:8080/recommended/get?userId=sayan16', { headers: this.headers })
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
    this.http.post<any>('http://localhost:8080/recommended/add?userId=sayan16', data, { headers: this.headers })
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
}
