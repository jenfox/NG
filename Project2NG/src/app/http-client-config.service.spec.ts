import { TestBed, inject } from '@angular/core/testing';

import { HttpClientConfigService } from './http-client-config.service';

describe('HttpClientConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientConfigService]
    });
  });

  it('should be created', inject([HttpClientConfigService], (service: HttpClientConfigService) => {
    expect(service).toBeTruthy();
  }));
});
