import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHListComponent } from './image-h-list.component';

describe('ImageHListComponent', () => {
  let component: ImageHListComponent;
  let fixture: ComponentFixture<ImageHListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageHListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageHListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
