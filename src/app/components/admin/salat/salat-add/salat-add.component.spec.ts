import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalatAddComponent } from './salat-add.component';

describe('SalatAddComponent', () => {
  let component: SalatAddComponent;
  let fixture: ComponentFixture<SalatAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalatAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
