import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailsComponent } from './card-details.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecommendedService } from '../services/database/recommended/recommended.service';
import { RouterModule } from '@angular/router';
describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;
  let p : HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsComponent ],
      imports:[
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      providers:[
        RecommendedService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    p = fixture.nativeElement.querySelector('p');
  });

  it('should be same',()=>{
    expect(p.textContent).toEqual(`Recommended by ${component.recommendedCount} users`);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
