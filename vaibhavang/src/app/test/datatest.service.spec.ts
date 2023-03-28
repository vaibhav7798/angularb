import { TestBed } from '@angular/core/testing';

import { DatatestService } from './datatest.service';

describe('DatatestService', () => {
  let service: DatatestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
