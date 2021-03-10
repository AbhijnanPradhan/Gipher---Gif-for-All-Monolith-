import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faHeart,faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiDataInterface, DataBlock } from '../interfaces/ApiDataInterface';
import { RecommendedService } from '../services/recommended/recommended.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,OnChanges{
  faFav = faHeart;
  faRecommend = faStar;
  @Input() dataArray: Array<DataBlock>=[];
  @Input() columnCount: Number=3;

  constructor(private recommendedService:RecommendedService) {}
  
  ngOnChanges(): void {
    console.log('change in card');
    // this.ngOnInit();
  }

  ngOnInit(): void {
    
  }

  addFavourite(data:DataBlock) {
    console.log("add favourite", data);
  }

  addRecommended(data:DataBlock) {
    console.log("add recommended", data);
    this.recommendedService.addRecommended(data)
      .subscribe(data=>console.log("Reco add success", data));
  }

}
