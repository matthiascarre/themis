import { TestBed } from '@angular/core/testing';

import { AudioRecordingServiceService } from './audio-recording-service.service';

describe('AudioRecordingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioRecordingServiceService = TestBed.get(AudioRecordingServiceService);
    expect(service).toBeTruthy();
  });
});
