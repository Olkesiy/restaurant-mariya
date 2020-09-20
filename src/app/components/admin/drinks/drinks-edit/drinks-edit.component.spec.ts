import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksEditComponent } from './drinks-edit.component';

describe('DrinksEditComponent', () => {
  let component: DrinksEditComponent;
  let fixture: ComponentFixture<DrinksEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
