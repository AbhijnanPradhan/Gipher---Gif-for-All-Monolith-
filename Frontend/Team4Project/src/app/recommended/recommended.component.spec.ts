import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RecommendedComponent } from './recommended.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RecommendedService } from '../services/database/recommended/recommended.service';

describe('RecommendedComponent', () => {
  let component: RecommendedComponent;
  let fixture: ComponentFixture<RecommendedComponent>;
  let h2:HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule ],
      providers:[RecommendedService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have header2', () => {
    expect(h2.title).toContain('Recommended');
  });
});
