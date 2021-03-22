import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FavoriteComponent } from './favorite.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;
  let h2:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h2 = fixture.nativeElement.querySelector('h2');
  });

  it('check favourites header', () => {
    expect(h2.textContent).toEqual("Your Favorites");
  });

});
