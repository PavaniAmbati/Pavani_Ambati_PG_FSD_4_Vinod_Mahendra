import { TestBed } from '@angular/core/testing';

import { CategoryitemlistService } from '../shared/categoryitemlist.service';

describe('CategoryitemlistService', () => {
  let service: CategoryitemlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryitemlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
