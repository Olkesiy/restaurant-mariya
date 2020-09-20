import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRAddComponent } from './image-r-add.component';

describe('ImageRAddComponent', () => {
  let component: ImageRAddComponent;
  let fixture: ComponentFixture<ImageRAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
