import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  inputs:[`searchString`]
})
export class SearchResultComponent implements OnInit {
  searchString : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSearchClick(searchStringrcv:string):void{
    this.searchString = searchStringrcv;
    console.log('Search boi:'+this.searchString);
  }
}
