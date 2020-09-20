import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalatEditComponent } from './salat-edit.component';

describe('SalatEditComponent', () => {
  let component: SalatEditComponent;
  let fixture: ComponentFixture<SalatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
