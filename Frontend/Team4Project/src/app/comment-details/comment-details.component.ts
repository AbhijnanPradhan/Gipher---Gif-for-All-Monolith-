import { Component, Input, OnInit } from '@angular/core';
import { CommentDataInterface } from "../interfaces/CommentDataInterface";
import { CommentService } from '../services/database/comment/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  @Input()comment:CommentDataInterface = new CommentDataInterface;

  likeStatus: boolean = false;
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    
  }
  
  liked(){
    console.log("Clicked on like!");
    this.likeStatus = !this.likeStatus;
    if(this.likeStatus){
      console.log("like added");
      this.commentService.addLikeToComment(this.comment.commentId);
    }else{
      console.log(("like removed"));
      this.commentService.removeLikeFromComment(this.comment.commentId);
    }
  }
}
