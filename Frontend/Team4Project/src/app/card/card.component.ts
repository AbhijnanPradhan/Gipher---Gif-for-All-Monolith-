import { Component, OnInit } from '@angular/core';
import { faHeart,faStar } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  faFav = faHeart;
  faRecommend = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
