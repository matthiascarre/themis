import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionRogatoireComponent } from './commission-rogatoire.component';

describe('CommissionRogatoireComponent', () => {
  let component: CommissionRogatoireComponent;
  let fixture: ComponentFixture<CommissionRogatoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionRogatoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionRogatoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
