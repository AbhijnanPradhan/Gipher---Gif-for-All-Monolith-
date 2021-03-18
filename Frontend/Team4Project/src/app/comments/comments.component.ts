import { Component, Input, OnInit } from '@angular/core';
import { CommentDataInterface } from '../interfaces/CommentDataInterface';
import { CommentService } from '../services/database/comment/comment.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() gifId: string = '';

  public comments:Array<CommentDataInterface>= [];
  constructor(private commentService: CommentService) { }
  
  ngOnInit(): void {
    this.commentService.getBehaviourSubject()
    .subscribe(commentBlocks =>{
      // console.log('Get comment data service:', commentBlocks);
      this.comments = commentBlocks;
      console.log('Comment Data:', this.comments);
    });
    this.commentService.getCommentsByGif(this.gifId);
  }

}

