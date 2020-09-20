import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondsCoursesListComponent } from './seconds-courses-list.component';

describe('SecondsCoursesListComponent', () => {
  let component: SecondsCoursesListComponent;
  let fixture: ComponentFixture<SecondsCoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondsCoursesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondsCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
