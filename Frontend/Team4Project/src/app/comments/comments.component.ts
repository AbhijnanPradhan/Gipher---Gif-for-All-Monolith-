import { Component, Input, OnInit } from '@angular/core';
import { CommentDataInterface } from '../interfaces/CommentDataInterface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comment:CommentDataInterface = new CommentDataInterface;
  likeStatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  liked(){
    console.log("Clicked on like!");
    this.likeStatus = !this.likeStatus;
    this.dbLiked(this.likeStatus); // for backend implementation
  }
  dbLiked(likeBool:boolean){

  }
}
