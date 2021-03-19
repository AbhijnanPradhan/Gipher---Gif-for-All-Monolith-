import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataBlock } from 'src/app/interfaces/ApiDataInterface';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private favouriteSubject :BehaviorSubject<Array<DataBlock>>= new BehaviorSubject(new Array<DataBlock>());
  private messageSubject:BehaviorSubject<String> = new BehaviorSubject(new String());
private favourites:Array<DataBlock>=[];

private bearerToken=this.loginService.fetchToken();
private userId:string | null=this.loginService.fetchUserId();
private headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', 'http://localhost:8080')
.set('Authorization', `Bearer ${this.bearerToken}`);

  constructor(private httpClient:HttpClient,private loginService:LoginService) { }

  getFavourites(){
    this.httpClient.get<Array<any>>(`http://localhost:8080/favorites/get?userId=${this.userId}`, { headers: this.headers })
    .subscribe(data=>{
      this.favourites=data;
      console.log("getFavourite");
      this.favouriteSubject.next(this.favourites);
    });
  }

  addFavourite(data:DataBlock){
    const headers={
      headers:new HttpHeaders().set('Authorization',`Bearer ${this.bearerToken}`)
    };
    this.httpClient.post<any>(`http://localhost:8080/favorites/add?userId=${this.userId}`, data, { headers: this.headers })
    .subscribe(data=>{
      this.messageSubject.next(data.message);
      if(data.message=="Success"){
        this.favourites.push(data);
        this.favouriteSubject.next(this.favourites);
      }
    });
  }

  deleteFavourite(data:DataBlock){
    const headers={
      headers:new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
    };
    this.httpClient.post<any>(`http://localhost:8080/favorites/remove?userId=${this.userId}`, data, { headers: this.headers })
    .subscribe(data=>{
      // this.messageSubject.next(data.message);
      // if(data.message=="Success"){
      //   this.favourites.push(data);
      //   this.favouriteSubject.next(this.favourites);
      // }
    });
  }

  
  
    getBehaviourSubject():BehaviorSubject<Array<DataBlock>>{
      return this.favouriteSubject;
    }
    getMessageSubject():BehaviorSubject<String>{
      return this.messageSubject;

    }
    setToken(token:string){
      this.bearerToken=token;

    }
    setUserId(userId:string){
      this.userId=userId;

    }
}
