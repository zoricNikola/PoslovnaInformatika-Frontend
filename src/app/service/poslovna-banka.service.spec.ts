import { TestBed } from '@angular/core/testing';

import { PoslovnaBankaService } from './poslovna-banka.service';

describe('PoslovnaBankaService', () => {
  let service: PoslovnaBankaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoslovnaBankaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
