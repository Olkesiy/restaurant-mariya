import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHAddComponent } from './image-h-add.component';

describe('ImageHAddComponent', () => {
  let component: ImageHAddComponent;
  let fixture: ComponentFixture<ImageHAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageHAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageHAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
