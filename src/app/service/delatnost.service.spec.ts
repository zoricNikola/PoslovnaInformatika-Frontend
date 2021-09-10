import { TestBed } from '@angular/core/testing';

import { DelatnostService } from './delatnost.service';

describe('DelatnostService', () => {
  let service: DelatnostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelatnostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
