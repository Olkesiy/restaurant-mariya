import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondsCoursesEditComponent } from './seconds-courses-edit.component';

describe('SecondsCoursesEditComponent', () => {
  let component: SecondsCoursesEditComponent;
  let fixture: ComponentFixture<SecondsCoursesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondsCoursesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondsCoursesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
