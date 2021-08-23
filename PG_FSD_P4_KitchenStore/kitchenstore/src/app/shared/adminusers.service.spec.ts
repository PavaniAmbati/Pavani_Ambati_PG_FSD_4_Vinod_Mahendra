import { TestBed } from '@angular/core/testing';

import { AdminusersService } from './adminusers.service';

describe('AdminusersserviceService', () => {
  let service: AdminusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
