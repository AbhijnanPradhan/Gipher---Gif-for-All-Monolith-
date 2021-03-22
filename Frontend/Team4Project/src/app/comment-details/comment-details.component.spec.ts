import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailsComponent } from './comment-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommentDetailsComponent', () => {
  let component: CommentDetailsComponent;
  let fixture: ComponentFixture<CommentDetailsComponent>;
  let h4: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDetailsComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h4=fixture.nativeElement.querySelector('h4');
  });
  // <h4><b style="color: lightcoral;">{{comment.userID}}</b>:<i>{{comment.comment}}</i></h4>
  it('Should show comment with commenterID', () => {
    expect(h4.textContent).toEqual(`${component.comment.userID}:${component.comment.comment}`);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
