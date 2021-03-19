import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivityLogComponent } from './activity-log.component';

describe('ActivityLogComponent', () => {
  let component: ActivityLogComponent;
  let fixture: ComponentFixture<ActivityLogComponent>;

  let b:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityLogComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityLogComponent);
    component = fixture.componentInstance; // BannerComponent test instance
    b = fixture.nativeElement.querySelector('b');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain Your Activity Log',() => {
    expect(b.textContent).toContain("Your Activity Log");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
