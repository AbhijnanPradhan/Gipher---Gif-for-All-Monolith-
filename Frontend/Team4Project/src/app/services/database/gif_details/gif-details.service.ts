import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GifDetailsService {

  private bearerToken = this.loginService.fetchToken();
  private userId: string | null = this.loginService.fetchUserId();
  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:8080')
    .set('Authorization', `Bearer ${this.bearerToken}`);

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getDetails(gifId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/gif/details?userId=${this.userId}&gifId=${gifId}`,
      { headers: this.headers });
  }
}
