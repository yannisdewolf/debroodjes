import { TestBed } from '@angular/core/testing';

import { BroodjesService } from './broodjes.service';

describe('BroodjesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BroodjesService = TestBed.get(BroodjesService);
    expect(service).toBeTruthy();
  });
});
