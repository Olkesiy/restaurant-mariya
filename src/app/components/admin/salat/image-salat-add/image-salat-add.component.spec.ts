import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSalatAddComponent } from './image-salat-add.component';

describe('ImageSalatAddComponent', () => {
  let component: ImageSalatAddComponent;
  let fixture: ComponentFixture<ImageSalatAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSalatAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSalatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
