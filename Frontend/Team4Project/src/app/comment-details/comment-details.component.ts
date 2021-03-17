import { Component, Input, OnInit } from '@angular/core';
import { CommentDataInterface } from "../interfaces/CommentDataInterface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  @Input()comment:CommentDataInterface = new CommentDataInterface;
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
  getToken(){
    return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBYmhpam5hbjMiLCJpc0FkbWluIjp0cnVlLCJleHAiOjE2MTYwMDYxNDMsImlhdCI6MTYxNTk4ODE0M30.HSWW67JyynnNuyQlZDNuuHbs_rTpWxt_yADnh6NWDExiOnBsfHnCaJFUoWYiIuy5k8zIsUa02FCIHbwS0NZq2A';
  }
  getUserId(){
    return 'Abhijnan3';
  }
}
