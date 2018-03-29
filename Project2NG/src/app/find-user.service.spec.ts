import { TestBed, inject } from '@angular/core/testing';

import { FindUserService } from './find-user.service';

describe('FindUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindUserService]
    });
  });

  it('should be created', inject([FindUserService], (service: FindUserService) => {
    expect(service).toBeTruthy();
  }));
});
