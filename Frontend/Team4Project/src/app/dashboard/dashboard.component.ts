import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  inputs:[`searchString`]
})
export class DashboardComponent implements OnInit {
  public searchString: string = '';
  public canShowSearchBar: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  

}
