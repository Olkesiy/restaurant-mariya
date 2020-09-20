import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCoursesAddComponent } from './first-courses-add.component';

describe('FirstCoursesAddComponent', () => {
  let component: FirstCoursesAddComponent;
  let fixture: ComponentFixture<FirstCoursesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCoursesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCoursesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
