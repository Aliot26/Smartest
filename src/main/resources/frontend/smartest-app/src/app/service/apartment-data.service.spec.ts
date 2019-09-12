import {TestBed} from '@angular/core/testing';

import {ApartmentDataService} from './apartment-data.service';

describe('ApartmentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApartmentDataService = TestBed.get(ApartmentDataService);
    expect(service).toBeTruthy();
  });
});
