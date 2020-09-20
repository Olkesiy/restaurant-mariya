import { TestBed } from '@angular/core/testing';

import { SecondsCoursesService } from './seconds-courses.service';

describe('SecondsCoursesService', () => {
  let service: SecondsCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondsCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
