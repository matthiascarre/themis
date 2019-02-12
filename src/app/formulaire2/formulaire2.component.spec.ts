import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulaire2Component } from './formulaire2.component';

describe('Formulaire2Component', () => {
  let component: Formulaire2Component;
  let fixture: ComponentFixture<Formulaire2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formulaire2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulaire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
