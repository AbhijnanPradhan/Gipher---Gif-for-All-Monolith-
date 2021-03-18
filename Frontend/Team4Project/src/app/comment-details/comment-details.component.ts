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
  
  getToken(){
    return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBYmhpam5hbjMiLCJpc0FkbWluIjp0cnVlLCJleHAiOjE2MTYwMDYxNDMsImlhdCI6MTYxNTk4ODE0M30.HSWW67JyynnNuyQlZDNuuHbs_rTpWxt_yADnh6NWDExiOnBsfHnCaJFUoWYiIuy5k8zIsUa02FCIHbwS0NZq2A';
  }
  getUserId(){
    return 'Abhijnan3';
  }
}
