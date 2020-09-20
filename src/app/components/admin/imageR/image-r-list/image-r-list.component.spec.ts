import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRListComponent } from './image-r-list.component';

describe('ImageRListComponent', () => {
  let component: ImageRListComponent;
  let fixture: ComponentFixture<ImageRListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
