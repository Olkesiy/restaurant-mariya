import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalatlistComponent } from './salatlist.component';

describe('SalatlistComponent', () => {
  let component: SalatlistComponent;
  let fixture: ComponentFixture<SalatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
