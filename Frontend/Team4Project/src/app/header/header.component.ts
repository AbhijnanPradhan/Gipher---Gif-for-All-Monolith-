import { Component, OnInit } from '@angular/core';
import { faSearch,faUser,faBookmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faUser = faUser;
  faBookmark = faBookmark;
  constructor() { }

  ngOnInit(): void {
  }

}
