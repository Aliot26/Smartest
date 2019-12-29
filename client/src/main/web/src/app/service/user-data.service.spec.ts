import {TestBed} from '@angular/core/testing';

import {UserDataService} from './user-data.service';
import {HttpClientModule} from "@angular/common/http";

describe('UserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();
  });
});
