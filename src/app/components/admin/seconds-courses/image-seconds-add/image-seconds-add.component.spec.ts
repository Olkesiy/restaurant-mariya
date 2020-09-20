import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSecondsAddComponent } from './image-seconds-add.component';

describe('ImageSecondsAddComponent', () => {
  let component: ImageSecondsAddComponent;
  let fixture: ComponentFixture<ImageSecondsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSecondsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSecondsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
