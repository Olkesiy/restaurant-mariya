import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksAddComponent } from './drinks-add.component';

describe('DrinksAddComponent', () => {
  let component: DrinksAddComponent;
  let fixture: ComponentFixture<DrinksAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
