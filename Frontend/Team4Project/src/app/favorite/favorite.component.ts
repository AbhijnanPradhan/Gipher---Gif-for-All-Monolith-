import { Component, OnInit } from '@angular/core';
import { DataBlock, DataBlocker } from '../interfaces/ApiDataInterface';
import { FavouriteService } from '../services/database/favourites/favourite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  showSearchBar: boolean = false;
  showFavoritesLink:boolean = false;
  constructor(private favouriteService:FavouriteService) { }
  public dataParts:Array<DataBlock>=[];
  ngOnInit(): void {
    this.favouriteService.getBehaviourSubject()
    .subscribe(dataBlocks=>{
      this.dataParts=dataBlocks;
    })
    this.favouriteService.getFavourites();
  }



}
