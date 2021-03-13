import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faHeart,faStar,faInfo } from '@fortawesome/free-solid-svg-icons';
import { DataBlock } from '../interfaces/ApiDataInterface';
import { RecommendedService } from '../services/database/recommended/recommended.service';
import { RouterService } from "../services/router.service"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,OnChanges{
  faFav = faHeart;
  faRecommend = faStar;
  // faInfo = faInfo;
  @Input() dataArray: Array<DataBlock>=[];
  @Input() columnCount: Number=3;

  constructor(private recommendedService:RecommendedService, private router:RouterService) {}
  
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
  goToCardDetails(id:string){
    console.log("go to card details");
    
    this.router.routeToCardDetails(id);
  }

}
