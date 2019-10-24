import { TestBed } from '@angular/core/testing';

import { RolesService } from './roles.service';
import {HttpClientModule} from "@angular/common/http";

describe('RolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: RolesService = TestBed.get(RolesService);
    expect(service).toBeTruthy();
  });
});
