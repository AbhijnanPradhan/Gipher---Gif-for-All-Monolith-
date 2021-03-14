import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataBlock } from 'src/app/interfaces/ApiDataInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {

  constructor(private http: HttpClient) { }

  getRecommended(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:8080/recommended/get');
  }

  addRecommended(data: DataBlock): Observable<any> {
    return this.http.post<any>('http://localhost:8080/recommended/add?userId=sayan3', data);
  }
}
