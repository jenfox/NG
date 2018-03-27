import { TestBed, inject } from '@angular/core/testing';

import { FindUsersService } from './find-users.service';

describe('FindUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindUsersService]
    });
  });

  it('should be created', inject([FindUsersService], (service: FindUsersService) => {
    expect(service).toBeTruthy();
  }));
});
