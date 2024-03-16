import { TestBed } from '@angular/core/testing';

import { ResumeAndProfileService } from './resume-and-profile.service';

describe('ResumeAndProfileService', () => {
  let service: ResumeAndProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeAndProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
