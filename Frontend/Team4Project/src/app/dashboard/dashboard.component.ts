import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  inputs: [`searchString`]
})
export class DashboardComponent implements OnInit {
  public searchString: string = '';
  public canShowSearchBar: boolean = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let needsRefresh = this.route.snapshot.paramMap.get('refresh');
    console.log('NEEDS REFRESH', needsRefresh)
    if (needsRefresh != null)
      window.location.href = '/home';
  }



}
