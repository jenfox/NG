import { TestBed, inject } from '@angular/core/testing';

import { RegiserService } from './regiser.service';

describe('RegiserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegiserService]
    });
  });

  it('should be created', inject([RegiserService], (service: RegiserService) => {
    expect(service).toBeTruthy();
  }));
});
