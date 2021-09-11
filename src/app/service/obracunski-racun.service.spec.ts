import { TestBed } from '@angular/core/testing';

import { ObracunskiRacunService } from './obracunski-racun.service';

describe('ObracunskiRacunService', () => {
  let service: ObracunskiRacunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObracunskiRacunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
