import { TestBed } from '@angular/core/testing';

import { BroodjesService } from './broodjes.service';
import {Broodje} from './broodje';

describe('BroodjesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BroodjesService = TestBed.get(BroodjesService);
    expect(service).toBeTruthy();
  });

  it('should return the correct broodje based on ingredient', (done) => {
    const service: BroodjesService = TestBed.get(BroodjesService);

    service.getBroodjes('Oud Brugge').subscribe(broodjes => {
      expect(broodjes.map(broodje => broodje.naam)[0]).toBe('Bruggeling');
      done();
    });
  });

});
