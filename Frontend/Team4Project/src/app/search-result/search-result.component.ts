import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/api/search.service';
import { ApiDataInterface } from '../interfaces/ApiDataInterface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  inputs:[`searchString`]
})
export class SearchResultComponent implements OnInit {
  searchString : string = '';
  searchData = new ApiDataInterface();
  gifLinks:Array<string> = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  checker(){
    this.searchService.apiCaller().subscribe((data)=>{
      console.log(data);
      this.searchData = data;
      this.gifer(this.searchData);
    });
  }
  gifer(dataParam: ApiDataInterface){
    for(let i = 0;i<dataParam.data.length;i++){
      this.gifLinks.push(dataParam.data[i].images.downsized.url);
    }
  }
}
