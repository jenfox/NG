import { TestBed, inject } from '@angular/core/testing';

import { ProfilePicService } from './profile-pic.service';

describe('ProfilePicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilePicService]
    });
  });

  it('should be created', inject([ProfilePicService], (service: ProfilePicService) => {
    expect(service).toBeTruthy();
  }));
});
