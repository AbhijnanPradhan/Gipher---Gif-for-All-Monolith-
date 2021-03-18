import { TestBed } from '@angular/core/testing';

import { GifDetailsService } from './gif-details.service';

describe('GifDetailsService', () => {
  let service: GifDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
