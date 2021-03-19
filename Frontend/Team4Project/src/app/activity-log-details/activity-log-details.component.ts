import { Component, Input, OnInit } from '@angular/core';
import { DataBlocker} from '../interfaces/ApiDataInterface';
import { CommentDataInterface } from '../interfaces/CommentDataInterface';
import { SearchService } from '../services/api/search.service'
import { CommentService } from '../services/database/comment/comment.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-activity-log-details',
  templateUrl: './activity-log-details.component.html',
  styleUrls: ['./activity-log-details.component.css']
})
export class ActivityLogDetailsComponent implements OnInit {
  @Input() comment:CommentDataInterface = new CommentDataInterface();
  commentMsg:string="";
  editCommentString:string="";
  showInput:boolean = false;
  constructor(private searchService:SearchService,private commentService:CommentService, private router: RouterService) { }
  gifData:DataBlocker= new DataBlocker();
  
  ngOnInit(): void {
    this.searchService.gifIdCaller(`https://api.giphy.com/v1/gifs/${this.comment.gifID}?api_key=YIjy7FhdwY94RyTHx6qenE65qjGw49Tx`)
    .subscribe((data) =>{
      this.gifData = data;
    });
  }

  editComment() {
    if (this.editCommentString === '') {
      this.commentMsg = "Please type new comment before posting!";
    } else {
      //userId being given inside the service
      this.commentService.editComment(this.comment.commentID,this.editCommentString.split(" ").join("~"));
      this.commentMsg = "";
    }
  }
  removeComment(){
    if(confirm("Are you sure you want to delete the comment?"))
      this.commentService.removeComment(this.comment.commentID);
  }
  inputShower(){
    this.showInput=true;
  }
  inputHider(){
    this.showInput=false;
  }
  cardDetailsShower(){
    this.router.routeToCardDetails(this.gifData.data.id);
  }

}
