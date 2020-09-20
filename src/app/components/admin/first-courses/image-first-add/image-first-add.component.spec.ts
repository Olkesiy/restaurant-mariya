import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFirstAddComponent } from './image-first-add.component';

describe('ImageFirstAddComponent', () => {
  let component: ImageFirstAddComponent;
  let fixture: ComponentFixture<ImageFirstAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFirstAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFirstAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
