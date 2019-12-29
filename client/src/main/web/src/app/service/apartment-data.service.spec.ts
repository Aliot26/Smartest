import {TestBed} from '@angular/core/testing';

import {ApartmentDataService} from './apartment-data.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

describe('ApartmentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      FormsModule
    ]
  }));

  it('should be created', () => {
    const service: ApartmentDataService = TestBed.get(ApartmentDataService);
    expect(service).toBeTruthy();
  });
});
