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
  

  constructor() {
   }
  
  ngOnChanges(): void {
    console.log('change in card');
    // this.ngOnInit();
  }

  ngOnInit(): void {
    
  }

}
