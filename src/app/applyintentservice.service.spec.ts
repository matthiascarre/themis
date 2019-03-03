import { TestBed } from '@angular/core/testing';

import { ApplyintentserviceService } from './applyintentservice.service';

describe('ApplyintentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplyintentserviceService = TestBed.get(ApplyintentserviceService);
    expect(service).toBeTruthy();
  });
});
