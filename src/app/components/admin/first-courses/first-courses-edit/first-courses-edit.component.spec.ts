import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCoursesEditComponent } from './first-courses-edit.component';

describe('FirstCoursesEditComponent', () => {
  let component: FirstCoursesEditComponent;
  let fixture: ComponentFixture<FirstCoursesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCoursesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCoursesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
