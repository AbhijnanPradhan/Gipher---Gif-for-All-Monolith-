import { Component, Input, OnInit } from '@angular/core';
import { CommentDataInterface } from '../interfaces/CommentDataInterface';
import { CommentService } from '../services/database/comment/comment.service'
import { LoginService } from '../services/database/login/login.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() gifId: string = '';
  
  public comments:Array<CommentDataInterface>= [];
  likedCommentIds:Array<string>=[];
  userId = this.loginService.fetchUserId();
  constructor(private commentService: CommentService,private loginService:LoginService) { }
  
  ngOnInit(): void {
    this.commentService.getBehaviourSubject()
    .subscribe(commentBlocks =>{
      // console.log('Get comment data service:', commentBlocks);
      this.comments = commentBlocks;
      console.log('Comment Data abcd:', this.comments);
      this.comments.forEach( (value) => {
        this.likeChecker(value);
      });
      console.log("commentids",this.likedCommentIds);
    });
    this.commentService.getCommentsByGif(this.gifId);

   
    
  }

  // liked(commentId:string){
  //   console.log("Clicked on like!");
  //   this.likeStatus = !this.likeStatus;
  //   if(this.likeStatus){
  //     console.log("like added",this.commentId);
  //     this.commentService.addLikeToComment(this.commentId);
  //   }else{
  //     console.log("like removed",this.commentId);
  //     this.commentService.removeLikeFromComment(this.commentId);
  //   }
  // }

  likeChecker(comment:CommentDataInterface){
    console.log("cooment liker id",comment.likerIDs);
    console.log("comment obj", comment);
    
    for(let i =0;i<comment.likerIDs.length;i++){
      if(comment.likerIDs[i] === this.userId){
        this.likedCommentIds.push(comment.commentID);
      }
      console.log(comment.likerIDs,this.userId,comment.commentID);
    }
    console.log("likeDIds",this.likedCommentIds);
    
  }
}

