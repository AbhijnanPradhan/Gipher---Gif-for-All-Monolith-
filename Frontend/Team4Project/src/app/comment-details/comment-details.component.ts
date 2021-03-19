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
  commentID: string = '';
  constructor(private commentService:CommentService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.likeStatus = this.likeChecker(this.comment.likerIDs);
    console.log("commentId",this.comment.commentID);
    this.likeStatus = this.likeChecker(this.comment.likerIDs);
    this.commentID=this.comment.commentID;
    console.log("likeStatus",this.likeStatus);
    
  }

  liked(){
    console.log("Clicked on like!");
    this.likeStatus = !this.likeStatus;
    if(this.likeStatus){
      console.log("like added",this.commentID);
      this.commentService.addLikeToComment(this.commentID);
    }else{
      console.log("like removed",this.commentID);
      this.commentService.removeLikeFromComment(this.commentID);
    }
  }

  likeChecker(likers:Array<string>):boolean{
    console.log("likerIds",likers,this.userId)
    for(let i = 0; i < likers.length ; i++){
      if(likers[i] === this.userId){
        return true;
      }
    }
    return false;
  }

}
  
