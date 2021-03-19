import { Component, OnInit } from '@angular/core';
import { CommentDataInterface } from '../interfaces/CommentDataInterface';
import { CommentService } from '../services/database/comment/comment.service';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {

  constructor(private commentService:CommentService) { }
  
  public userComments:Array<CommentDataInterface>= [];
  
  ngOnInit(): void {
    this.commentService.getBehaviourSubject()
    .subscribe(commentBlocks =>{
      this.userComments = commentBlocks;
      console.log('Comment Data abcd:', this.userComments);
      
    });
    this.commentService.getCommentsByUser();
  }

}
