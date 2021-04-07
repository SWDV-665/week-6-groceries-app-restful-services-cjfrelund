import { TestBed } from '@angular/core/testing';

import { ProvisionsServiceService } from './provisions-service.service';

describe('ProvisionsServiceService', () => {
  let service: ProvisionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvisionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
