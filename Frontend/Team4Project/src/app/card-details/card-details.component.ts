import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/api/search.service';
import { DataBlocker } from '../interfaces/ApiDataInterface';
import { GifDetailsService } from '../services/database/gif_details/gif-details.service';
import { RecommendedService } from '../services/database/recommended/recommended.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  canShowSearchBar: boolean = false;
  gifId: string = "";
  url: string = "";
  gifDetails: DataBlocker = new DataBlocker();
  favourite: boolean = false;
  recommended: boolean = false;
  recommendedCount: number = 0;

  constructor(private route: ActivatedRoute, private searchService: SearchService,
    private gifDetailsService: GifDetailsService, private recommendedService: RecommendedService) { }


  ngOnInit(): void {
    this.gifId = String(this.route.snapshot.paramMap.get('id'));
    this.url = "https://api.giphy.com/v1/gifs/" + this.gifId + "?api_key=YIjy7FhdwY94RyTHx6qenE65qjGw49Tx";
    console.log("onInit ka url:" + this.url);
    this.datafiller(this.url);
    this.gifDetailsService.getDetails(this.gifId)
      .subscribe(data => {
        this.favourite = data.favourite;
        this.recommended = data.recommended;
        this.recommendedCount = data.recommendCount;
      }, error => {

      })
    this.recommendedService.getBehaviourSubject().subscribe(data => {
      this.recommendedCount++;
      this.recommended = true;
    })
  }

  datafiller(urlParam: string) {
    this.searchService.gifIdCaller(urlParam).subscribe((data) => {
      // console.log(data);
      // console.log('url:'+ urlParam);
      this.gifDetails = data;
      console.log("img:" + this.gifDetails.data.images.downsized.url);
      // this.gifer(this.searchData);
    });
  }
  logger() {
    console.log("img:" + this.gifDetails.data.images.downsized.url);
  }

  addFavourite() {
    //TODO Sufiyan
  }

  addRecommended() {
    this.recommendedService.addRecommended(this.gifDetails.data);
  }
  removeRecommended(){
    // TODO remove
  }
}
