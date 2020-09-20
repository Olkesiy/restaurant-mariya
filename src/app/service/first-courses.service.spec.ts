import { TestBed } from '@angular/core/testing';

import { FirstCoursesService } from './first-courses.service';

describe('FirstCoursesService', () => {
  let service: FirstCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
