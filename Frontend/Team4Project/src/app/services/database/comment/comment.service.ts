import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommentDataInterface } from '../../../interfaces/CommentDataInterface';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsSubject: BehaviorSubject<Array<CommentDataInterface>> = new BehaviorSubject(new Array<CommentDataInterface>());
  private messageSubject: BehaviorSubject<String> = new BehaviorSubject(new String());
  // private likedSubject:BehaviorSubject<Boolean>= new BehaviorSubject(new Boolean());
  private comments: Array<CommentDataInterface> = [];

  private bearerToken = this.loginService.fetchToken();
  private userId: string | null = this.loginService.fetchUserId();
  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:8080')
    .set('Authorization', `Bearer ${this.bearerToken}`);

  constructor(private http: HttpClient,private loginService: LoginService) { }

  // @RequestMapping("/comment")

  //@GetMapping("/getByGifID")
  getCommentsByGif(gifId:string){
    // @RequestParam String gifId
    this.http.get<Array<any>>(`http://localhost:8080/comment/getByGifID?gifId=${gifId}`, { headers: this.headers })
      .subscribe(data => {
        console.log('GetComments response', data);
        this.comments = data;
        this.commentsSubject.next(this.comments);
      });
  }

  //@GetMapping("/getByUser")
  getCommentsByUser(){
    // @RequestParam String userId
    this.http.get<Array<any>>(`http://localhost:8080/comment/getByUser?userId=${this.userId}`, { headers: this.headers })
      .subscribe(data => {
        console.log('GetComments response', data);
        this.comments = data;
        this.commentsSubject.next(this.comments);
      });
  }

  //@PostMapping("/add")
  addComment(dataParam : CommentDataInterface){
    // @RequestBody CommentBlock data ()
    dataParam.userID = this.userId+'';
    this.http.post<any>('http://localhost:8080/comment/add', dataParam, { headers: this.headers })
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
  removeComment(commentId:string){
    // @RequestParam String commentId,@RequestParam String userId
    this.http.post<any>(`http://localhost:8080/comment/remove?commentId=${commentId}&userId=${this.userId}`, { headers: this.headers })
    .subscribe(data => {
      console.log('Remove Comments response', data);
      this.messageSubject.next(data.message);
      if (data.message == "Success") {
        
        let items = this.comments;
        let item: Array<CommentDataInterface> = [];
        item.push(data);
        for(let i=0;i<items.length;i++){
          if(items[i].commentID === item[0].commentID){
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
  editComment(commentId:string,comment:string){
    // @RequestParam String commentId,@RequestParam String userId,@RequestParam String comment
    this.http.post<any>(`http://localhost:8080/comment/edit?commentId=${commentId}&userId=${this.userId}&comment=${comment}`, { headers: this.headers })
    .subscribe(data => {
      console.log('Edit Comments response', data);
      this.messageSubject.next(data.message);
      if (data.message == "Success") {
        
        let items = this.comments;
        let item: Array<CommentDataInterface> = [];
        item.push(data);
        for(let i=0;i<items.length;i++){
          if(items[i].commentID === item[0].commentID){
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
  addLikeToComment(commentId:string){
    // @RequestParam String commentId,@RequestParam String likerId
    console.log("Bearer token", this.bearerToken);
    
    this.http.post<any>(`http://localhost:8080/comment/addLike?commentId=${commentId}&likerId=${this.userId}`, { headers: this.headers })
    .subscribe(data => {
      console.log('Add like to Comments response', data);
      this.messageSubject.next(data.message);
      if (data.message == "Success") {
        
        let items = this.comments;
        let item: Array<CommentDataInterface> = [];
        item.push(data);
        for(let i=0;i<items.length;i++){
          if(items[i].commentID === item[0].commentID){
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
  removeLikeFromComment(commentId:string){
    // @RequestParam String commentId,@RequestParam String likerId
    this.http.post<any>(`http://localhost:8080/comment/removeLike?commentId=${commentId}&likerId=${this.userId}`, { headers: this.headers })
    .subscribe(data => {
      console.log('Add like to Comments response', data);
      this.messageSubject.next(data.message);
      if (data.message == "Success") {
        
        let items = this.comments;
        let item: Array<CommentDataInterface> = [];
        item.push(data);
        for(let i=0;i<items.length;i++){
          if(items[i].commentID === item[0].commentID){
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

  
}
