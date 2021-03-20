import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityLogDetailsComponent } from './activity-log-details.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('ActivityLogDetailsComponent', () => {
  let component: ActivityLogDetailsComponent;
  let fixture: ComponentFixture<ActivityLogDetailsComponent>;
  let h4: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityLogDetailsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityLogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h4=fixture.nativeElement.querySelector('h4');
  });
  it('no title in the DOM after createComponent()', () => {
    expect(h4.textContent).toEqual(component.comment.comment);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
