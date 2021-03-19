import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RecommendedComponent } from './recommended.component';

describe('RecommendedComponent', () => {
  let component: RecommendedComponent;
  let fixture: ComponentFixture<RecommendedComponent>;
  let h2:HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedComponent,HttpClientTestingModule, HttpTestingController ]
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
    expect(h2.textContent).toContain(String);
  });
});
