import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDrinkAddComponent } from './image-drink-add.component';

describe('ImageDrinkAddComponent', () => {
  let component: ImageDrinkAddComponent;
  let fixture: ComponentFixture<ImageDrinkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDrinkAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDrinkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
