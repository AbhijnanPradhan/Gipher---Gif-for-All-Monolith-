import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { DataBlock } from '../interfaces/ApiDataInterface';
import { FavouriteService } from '../services/database/favourites/favourite.service';
import { GifDetailsService } from '../services/database/gif_details/gif-details.service';
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
  favouriteIds: Array<string> = [];
  recommendIds: Array<string> = [];

  constructor(private favouriteService: FavouriteService,
    private recommendedService: RecommendedService,
    private router: RouterService,
    private gifDetailsService: GifDetailsService) { }

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
      });

    this.recommendedService.getRecommendModifySubject()
      .subscribe(data => {
        if (data == "added" || data == "removed")
          this.gifDetailsService.allDetails();
      });

    this.favouriteService.getFavouriteModifySubject()
      .subscribe(data => {
        if (data == "added" || data == "removed")
          this.gifDetailsService.allDetails();
      });

    this.gifDetailsService.getAllDetailsSubject().subscribe(data => {
      this.recommendIds = data.recommendIds;
      this.favouriteIds = data.favouriteIds;
    })
    this.gifDetailsService.allDetails();
  }

  addFavourite(data: DataBlock) {
    console.log("add favourite", data);
    this.favouriteService.addFavourite(data);
  }

  addRecommended(data: DataBlock) {
    console.log("add recommended", data);
    this.recommendedService.addRecommended(data);
  }

  removeFavourite(data: DataBlock) {
    console.log("add favourite", data);
    this.favouriteService.deleteFavourite(data);
  }

  removeRecommended(data: DataBlock) {
    console.log("add recommended", data);
    this.recommendedService.removeRecommended(data);
  }

  goToCardDetails(id: string) {
    console.log("go to card details");

    this.router.routeToCardDetails(id);
  }

}
