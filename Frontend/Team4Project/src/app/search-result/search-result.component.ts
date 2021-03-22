import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SearchService } from '../services/api/search.service';
import { ApiDataInterface,DataBlock } from '../interfaces/ApiDataInterface';
import { faHeart,faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit,OnChanges {
  @Input() searchString : string='';
  searchData = new ApiDataInterface();
  dataParts: Array<DataBlock>=[];
  limit: number = 4;
  numEnabler:boolean = false;
  url:string = 'https://api.giphy.com/v1/gifs/trending?api_key=YIjy7FhdwY94RyTHx6qenE65qjGw49Tx&limit=12&rating=g';
  faFav = faHeart;
  faRecommend = faStar;
  message:string = '';
  
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.checker(this.url); //for trending gifs
  }
  ngOnChanges() {
    console.log('change:noted:' + this.searchString);
    if(this.searchString!=''){
      this.numEnabler=true;
      this.changeBoi(this.limit.toString());
    }else{
      this.numEnabler=false;
      this.checker('https://api.giphy.com/v1/gifs/trending?api_key=YIjy7FhdwY94RyTHx6qenE65qjGw49Tx&limit=6&rating=g');
    }
    
  }
  checker(urlParam:string){
    // this.searchData = new ApiDataInterface();
    this.searchService.apiCaller(urlParam).subscribe((data)=>{
      console.log(data);
      console.log('url:'+ urlParam);
      this.searchData = data;
      this.gifer(this.searchData);
    });
  }
  changeBoi(UpdatedLimit:string):void{
    if(UpdatedLimit!=null){
      if(Number(UpdatedLimit)>0){
        this.url = 'https://api.giphy.com/v1/gifs/search?api_key=YIjy7FhdwY94RyTHx6qenE65qjGw49Tx&q='+this.searchString+'&limit='+UpdatedLimit+'&offset=0&rating=g&lang=en';
        this.checker(this.url);
        this.message = "Will show "+UpdatedLimit+" results";
      }else{
        this.message = "Can not show negative results";
      }
    }else{
      this.message = "showing last set values as field is empty";
    }
  }
  gifer(dataParam: ApiDataInterface){
    this.dataParts = [];
    for(let i = 0;i<dataParam.data.length;i++){
      this.dataParts.push(dataParam.data[i]);
      // this.imgurl = dataParam.data[i].images.downsized.url;
    }
  }
  
  
}
