import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCoursesAddComponent } from './image-courses-add.component';

describe('ImageCoursesAddComponent', () => {
  let component: ImageCoursesAddComponent;
  let fixture: ComponentFixture<ImageCoursesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCoursesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCoursesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
