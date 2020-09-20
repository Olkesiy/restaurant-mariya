import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCoursesListComponent } from './first-courses-list.component';

describe('FirstCoursesListComponent', () => {
  let component: FirstCoursesListComponent;
  let fixture: ComponentFixture<FirstCoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCoursesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
