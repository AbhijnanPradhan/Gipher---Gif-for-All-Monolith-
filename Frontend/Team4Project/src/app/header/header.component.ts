import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch,faUser,faHeart } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  outputs:[`eventSearchButtonClicked`]
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faUser = faUser;
  faFav = faHeart;
  searchString: string = '';
  
  eventSearchButtonClicked = new EventEmitter<string>();
  searchClicked(){
    console.log('header boi:'+this.searchString);
    this.eventSearchButtonClicked.emit(this.searchString);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
