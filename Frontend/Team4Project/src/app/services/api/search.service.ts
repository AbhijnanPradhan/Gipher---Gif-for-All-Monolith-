import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiDataInterface, DataBlocker } from '../../interfaces/ApiDataInterface'
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  apiCaller(url:string): Observable<ApiDataInterface>{
    return this.http.get<ApiDataInterface>(url);
  }

  gifIdCaller(url:string): Observable<DataBlocker>{
    return this.http.get<DataBlocker>(url);
  }
}
