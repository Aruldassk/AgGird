import { TestBed } from '@angular/core/testing';

import { GpSearchService } from './gp-search.service';

describe('GpSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpSearchService = TestBed.get(GpSearchService);
    expect(service).toBeTruthy();
  });
});
