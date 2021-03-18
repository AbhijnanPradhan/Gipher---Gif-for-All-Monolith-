import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifDetailsService {

  private bearerToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYXlhbjE2IiwiaXNBZG1pbiI6dHJ1ZSwiZXhwIjoxNjE2MDY2NDA2LCJpYXQiOjE2MTYwNDg0MDZ9.Z7-4jYjZNG5mM80D1ZEvhyVZrhGlWhhTAaqHOURVk9SoBkpUsdM5HIBxqLxBwQmdzlBWoN9tiAB2NYRXF4hFXQ';
  private userId: string = 'Abhijnan3';
  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:8080')
    .set('Authorization', `Bearer ${this.bearerToken}`);

  constructor(private http: HttpClient) { }

  getDetails(gifId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/gif/details?userId=${this.userId}&gifId=${gifId}`,
      { headers: this.headers });
  }
}
