import { Component, Input, OnInit } from '@angular/core';
import { DataBlock, DataBlocker} from '../interfaces/ApiDataInterface';
import { CommentDataInterface } from '../interfaces/CommentDataInterface';
import { SearchService } from '../services/api/search.service'

@Component({
  selector: 'app-activity-log-details',
  templateUrl: './activity-log-details.component.html',
  styleUrls: ['./activity-log-details.component.css']
})
export class ActivityLogDetailsComponent implements OnInit {
  @Input() comment:CommentDataInterface = new CommentDataInterface();
  
  constructor(private searchService:SearchService) { }
  gifData:DataBlocker= new DataBlocker();
  
  ngOnInit(): void {
    this.searchService.gifIdCaller(`https://api.giphy.com/v1/gifs/${this.comment.gifID}?api_key=YIjy7FhdwY94RyTHx6qenE65qjGw49Tx`)
    .subscribe((data) =>{
      this.gifData = data;
    });
  }

}
