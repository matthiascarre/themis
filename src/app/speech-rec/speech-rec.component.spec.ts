import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechRecComponent } from './speech-rec.component';

describe('SpeechRecComponent', () => {
  let component: SpeechRecComponent;
  let fixture: ComponentFixture<SpeechRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
