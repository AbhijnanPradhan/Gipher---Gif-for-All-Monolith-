import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiDataInterface } from '../../interfaces/ApiDataInterface'
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  apiCaller(): Observable<ApiDataInterface>{
    return this.http.get<ApiDataInterface>('https://api.giphy.com/v1/gifs/search?api_key=YIjy7FhdwY94RyTHx6qenE65qjGw49Tx&q=winnie&limit=3&offset=0&rating=g&lang=en');
  }
}
