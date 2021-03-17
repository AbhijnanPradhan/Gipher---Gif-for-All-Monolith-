import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommentDataInterface } from '../../../interfaces/CommentDataInterface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsSubject: BehaviorSubject<Array<CommentDataInterface>> = new BehaviorSubject(new Array<CommentDataInterface>());
  private messageSubject: BehaviorSubject<String> = new BehaviorSubject(new String());
  // private likedSubject:BehaviorSubject<Boolean>= new BehaviorSubject(new Boolean());
  private comments: Array<CommentDataInterface> = [];

  // private bearerToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBYmhpam5hbjMiLCJpc0FkbWluIjp0cnVlLCJleHAiOjE2MTYwMDYxNDMsImlhdCI6MTYxNTk4ODE0M30.HSWW67JyynnNuyQlZDNuuHbs_rTpWxt_yADnh6NWDExiOnBsfHnCaJFUoWYiIuy5k8zIsUa02FCIHbwS0NZq2A';
  // private userId:string = 'Abhijnan3';
  // private gifId: string = '';
  // private headers = new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', 'http://localhost:8080')
  // .set('Authorization', `Bearer ${bearerToken}`);

  constructor(private http: HttpClient) { }

  // @RequestMapping("/comment")

  //@GetMapping("/getByGifID")
  getCommentsByGif(token:string,gifId:string){
    // @RequestParam String gifId
    this.http.get<Array<any>>(`http://localhost:8080/comment/getByGifID?gifId=${gifId}`, { headers: this.setHeaders(token) })
      .subscribe(data => {
        console.log('GetComments response', data);
        this.comments = data;
        this.commentsSubject.next(this.comments);
      });
  }

  //@GetMapping("/getByUser")
  getCommentsByUser(token:string,userId:string){
    // @RequestParam String userId
    this.http.get<Array<any>>(`http://localhost:8080/comment/getByUser?userId=${userId}`, { headers: this.setHeaders(token) })
      .subscribe(data => {
        console.log('GetComments response', data);
        this.comments = data;
        this.commentsSubject.next(this.comments);
      });
  }

  //@PostMapping("/add")
  addComment(token:string,dataParam : CommentDataInterface){
    // @RequestBody CommentBlock data ()
    this.http.post<any>('http://localhost:8080/comment/add', dataParam, { headers: this.setHeaders(token) })
      .subscribe(data => {
        console.log('AddComments response', data);
        this.messageSubject.next(data.message);
        if (data.message == "Success") {
          this.comments.push(data);
          this.commentsSubject.next(this.comments);
        }
      }, error => {
        this.messageSubject.next(error);
      });
  }

  //@PostMapping("/remove")
  removeComment(token:string,userId:string,commentId:string){
    // @RequestParam String commentId,@RequestParam String userId
    this.http.post<any>(`http://localhost:8080/comment/remove?commentId=${commentId}&userId=${userId}`, { headers: this.setHeaders(token) })
    .subscribe(data => {
      console.log('Remove Comments response', data);
      this.messageSubject.next(data.message);
      if (data.message == "Success") {
        
        let items = this.comments;
        let item: Array<CommentDataInterface> = [];
        item.push(data);
        for(let i=0;i<items.length;i++){
          if(items[i].commentId === item[0].commentId){
            this.comments.splice(i,1);
            break;
          }
        }
        item = []; items = [];
        this.commentsSubject.next(this.comments);
      }
    }, error => {
      this.messageSubject.next(error);
    });
  }

  //@PostMapping("/edit")
  editComment(token:string,userId:string,commentId:string,comment:string){
    // @RequestParam String commentId,@RequestParam String userId,@RequestParam String comment
    this.http.post<any>(`http://localhost:8080/comment/edit?commentId=${commentId}&userId=${userId}&comment=${comment}`, { headers: this.setHeaders(token) })
    .subscribe(data => {
      console.log('Edit Comments response', data);
      this.messageSubject.next(data.message);
      if (data.message == "Success") {
        
        let items = this.comments;
        let item: Array<CommentDataInterface> = [];
        item.push(data);
        for(let i=0;i<items.length;i++){
          if(items[i].commentId === item[0].commentId){
            this.comments.splice(i,1);
            this.comments.push(data);
            break;
          }
        }
        item = []; items = [];
        this.commentsSubject.next(this.comments);
      }
    }, error => {
      this.messageSubject.next(error);
    });
  }

  // @PostMapping("/addLike")
  addLikeToComment(token:string,commentId:string,userId:string){
    // @RequestParam String commentId,@RequestParam String likerId
    this.http.post<any>(`http://localhost:8080/comment/addLike?commentId=${commentId}&likerId=${userId}`, { headers: this.setHeaders(token) })
    .subscribe(data => {
      console.log('Add like to Comments response', data);
      this.messageSubject.next(data.message);
      if (data.message == "Success") {
        
        let items = this.comments;
        let item: Array<CommentDataInterface> = [];
        item.push(data);
        for(let i=0;i<items.length;i++){
          if(items[i].commentId === item[0].commentId){
            this.comments[i].likes = item[0].likes;
            break;
          }
        }
        item = []; items = [];
        this.commentsSubject.next(this.comments);
      }
    }, error => {
      this.messageSubject.next(error);
    });
  }

  // @PostMapping("/removeLike")
  removeLikeFromComment(token:string,commentId:string,likerId:string){
    // @RequestParam String commentId,@RequestParam String likerId
    this.http.post<any>(`http://localhost:8080/comment/removeLike?commentId=${commentId}&likerId=${likerId}`, { headers: this.setHeaders(token) })
    .subscribe(data => {
      console.log('Add like to Comments response', data);
      this.messageSubject.next(data.message);
      if (data.message == "Success") {
        
        let items = this.comments;
        let item: Array<CommentDataInterface> = [];
        item.push(data);
        for(let i=0;i<items.length;i++){
          if(items[i].commentId === item[0].commentId){
            this.comments[i].likes = item[0].likes;
            break;
          }
        }
        item = []; items = [];
        this.commentsSubject.next(this.comments);
      }
    }, error => {
      this.messageSubject.next(error);
    });
  }

  // Getter and setters
  getBehaviourSubject(): BehaviorSubject<Array<CommentDataInterface>> {
    return this.commentsSubject;
  }

  getMessageSubject(): BehaviorSubject<String> {
    return this.messageSubject;
  }

  setHeaders(bearerToken:string){
    return new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:8080')
    .set('Authorization', `Bearer ${bearerToken}`);
  }
}
