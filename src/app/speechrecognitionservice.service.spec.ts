import { TestBed } from '@angular/core/testing';

import { SpeechrecognitionserviceService } from './speechrecognitionservice.service';

describe('SpeechrecognitionserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeechrecognitionserviceService = TestBed.get(SpeechrecognitionserviceService);
    expect(service).toBeTruthy();
  });
});
