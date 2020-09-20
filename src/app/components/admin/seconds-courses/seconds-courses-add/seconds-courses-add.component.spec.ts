import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondsCoursesAddComponent } from './seconds-courses-add.component';

describe('SecondsCoursesAddComponent', () => {
  let component: SecondsCoursesAddComponent;
  let fixture: ComponentFixture<SecondsCoursesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondsCoursesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondsCoursesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
