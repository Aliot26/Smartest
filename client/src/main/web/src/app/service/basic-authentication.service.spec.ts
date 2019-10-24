import {TestBed} from '@angular/core/testing';

import {BasicAuthenticationService} from './basic-authentication.service';
import {HttpClientModule} from "@angular/common/http";

describe('BasicAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: BasicAuthenticationService = TestBed.get(BasicAuthenticationService);
    expect(service).toBeTruthy();
  });
});
