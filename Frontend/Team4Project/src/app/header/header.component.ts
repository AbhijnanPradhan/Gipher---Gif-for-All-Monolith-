import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch,faUser,faBookmark } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  outputs:[`countSearchButtonClicked`]
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faUser = faUser;
  faBookmark = faBookmark;
  searchString: string = '';
  @Output()
  countSearchButtonClicked: EventEmitter<string> = new EventEmitter<string>();
  searchClicked(){
    console.log('header boi:'+this.searchString);
    this.countSearchButtonClicked.emit(this.searchString);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
