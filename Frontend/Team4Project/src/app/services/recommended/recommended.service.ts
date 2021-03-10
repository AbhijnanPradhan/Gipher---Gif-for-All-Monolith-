import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataBlock } from 'src/app/interfaces/ApiDataInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {

  constructor(private http: HttpClient) { }

  getRecommended(): Observable<Array<DataBlock>> {
    return this.http.get<Array<DataBlock>>('http://localhost:8080/recommended/get');
  }

  addRecommended(data: DataBlock): Observable<DataBlock> {
    return this.http.post<DataBlock>('http://localhost:8080/recommended/add', data);
  }
}
