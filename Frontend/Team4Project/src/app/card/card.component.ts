import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { DataBlock } from '../interfaces/ApiDataInterface';
import { FavouriteService } from '../services/database/favourites/favourite.service';
import { RecommendedService } from '../services/database/recommended/recommended.service';
import { RouterService } from "../services/router.service"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  faFav = faHeart;
  faRecommend = faStar;
  // faInfo = faInfo;
  @Input() dataArray: Array<DataBlock> = [];
  @Input() columnCount: Number = 3;

  constructor(private favouriteService:FavouriteService,private recommendedService: RecommendedService, private router: RouterService) { }

  ngOnChanges(): void {
    console.log('change in card');
    // this.ngOnInit();
  }

  ngOnInit(): void {
    this.recommendedService.getBehaviourSubject()
      .subscribe(dataBlocks => {
        console.log('get recommended card component', dataBlocks);
      });

    this.recommendedService.getMessageSubject()
      .subscribe(message => {
        console.log('get recommended card component mesage', message);
      })
  }

  addFavourite(data: DataBlock) {
    console.log("add favourite", data);
    this.favouriteService.addFavourite(data);
  }

  addRecommended(data: DataBlock) {
    console.log("add recommended", data);
    this.recommendedService.addRecommended(data);
  }
  goToCardDetails(id: string) {
    console.log("go to card details");

    this.router.routeToCardDetails(id);
  }

}
