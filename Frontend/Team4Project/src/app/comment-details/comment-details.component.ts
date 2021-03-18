import { Component, Input, OnInit } from '@angular/core';
import { CommentDataInterface } from "../interfaces/CommentDataInterface";
import { CommentService } from '../services/database/comment/comment.service';
import { LoginService } from '../services/database/login/login.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  @Input()comment:CommentDataInterface = new CommentDataInterface;
  
  likeStatus: boolean = false;//this.likeChecker(this.comment.likerIDs);
  userId: string = this.loginService.fetchUserId()+'';
  commentId: string = '';
  constructor(private commentService:CommentService, private loginService:LoginService) { }

  ngOnInit(): void {
    console.log("commentId",this.comment.commentID);
    this.likeStatus = this.likeChecker(this.comment.likerIDs);
    this.commentId=this.comment.commentID;
    console.log("likeStatus",this.likeStatus);
    
  }

  liked(commentId:string){
    console.log("Clicked on like!");
    this.likeStatus = !this.likeStatus;
    if(this.likeStatus){
      console.log("like added",this.commentId);
      this.commentService.addLikeToComment(this.commentId);
    }else{
      console.log("like removed",this.commentId);
      this.commentService.removeLikeFromComment(this.commentId);
    }
  }

  likeChecker(likers:Array<string>):boolean{
    for(let liker in likers){
      if(liker === this.userId){
        return true;
      }
    }
    return false;
  }

}
  
