import { Component, Input, OnInit } from '@angular/core';
import { CommentDataInterface } from '../interfaces/CommentDataInterface';
import { CommentService } from '../services/database/comment/comment.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  public comments:Array<CommentDataInterface>= [];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getBehaviourSubject()
    .subscribe(commentBlocks =>{
      // console.log('Get comment data service:', commentBlocks);
      this.comments = commentBlocks;
      console.log('Comment Data:', this.comments);
    });
    this.commentService.getCommentsByUser(this.getToken(),this.getUserId())
  }

  
  getToken(){
    return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBYmhpam5hbjMiLCJpc0FkbWluIjp0cnVlLCJleHAiOjE2MTYwMDYxNDMsImlhdCI6MTYxNTk4ODE0M30.HSWW67JyynnNuyQlZDNuuHbs_rTpWxt_yADnh6NWDExiOnBsfHnCaJFUoWYiIuy5k8zIsUa02FCIHbwS0NZq2A';
  }
  getUserId(){
    return 'Abhijnan3';
  }
}

