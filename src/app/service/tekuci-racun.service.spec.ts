import { TestBed } from '@angular/core/testing';

import { TekuciRacunService } from './tekuci-racun.service';

describe('TekuciRacunService', () => {
  let service: TekuciRacunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TekuciRacunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
