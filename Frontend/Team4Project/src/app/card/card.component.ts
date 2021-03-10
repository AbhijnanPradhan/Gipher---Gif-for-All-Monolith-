import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faHeart,faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiDataInterface, DataBlock } from '../interfaces/ApiDataInterface';
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

  constructor() {
   }
  
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
  }

}
