import {TestBed} from '@angular/core/testing';

import {HttpInterceptorAuthService} from './http-interceptor-auth.service';
import {HttpClientModule} from "@angular/common/http";

describe('HttpInterceptorAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: HttpInterceptorAuthService = TestBed.get(HttpInterceptorAuthService);
    expect(service).toBeTruthy();
  });
});
