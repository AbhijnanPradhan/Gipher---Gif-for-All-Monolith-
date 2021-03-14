import { Component, OnInit } from '@angular/core';
import { DataBlock } from '../interfaces/ApiDataInterface';
import { RecommendedService } from '../services/database/recommended/recommended.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  constructor(private recommendedService: RecommendedService) { }

  public dataParts: Array<DataBlock> = [];

  ngOnInit(): void {
    this.recommendedService.getBehaviourSubject()
      .subscribe(dataBlocks => {
        console.log('get recommended recommended component', dataBlocks);
        this.dataParts = dataBlocks;
      });
    this.recommendedService.getRecommended();
  }
}
