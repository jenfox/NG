import { TestBed, inject } from '@angular/core/testing';

import { LikePostService } from './like-post.service';

describe('LikePostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikePostService]
    });
  });

  it('should be created', inject([LikePostService], (service: LikePostService) => {
    expect(service).toBeTruthy();
  }));
});
