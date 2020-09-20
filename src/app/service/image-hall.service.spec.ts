import { TestBed } from '@angular/core/testing';

import { ImageHallService } from './image-hall.service';

describe('ImageHallService', () => {
  let service: ImageHallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageHallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
