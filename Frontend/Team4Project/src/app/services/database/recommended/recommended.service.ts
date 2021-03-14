import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataBlock } from 'src/app/interfaces/ApiDataInterface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RecommendedService {

  private recommendedSubject: BehaviorSubject<Array<DataBlock>> = new BehaviorSubject(new Array<DataBlock>());
  private messageSubject: BehaviorSubject<String> = new BehaviorSubject(new String());
  private recommends: Array<DataBlock> = [];

  constructor(private http: HttpClient) { }

  getRecommended() {
    this.http.get<Array<any>>('http://localhost:8080/recommended/get?userId=sayan3')
      .subscribe(data => {
        console.log('GetRecommended response', data);
        this.recommends = data;
        this.recommendedSubject.next(this.recommends);
      });
  }

  addRecommended(data: DataBlock) {
    this.http.post<any>('http://localhost:8080/recommended/add?userId=sayan3', data)
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
