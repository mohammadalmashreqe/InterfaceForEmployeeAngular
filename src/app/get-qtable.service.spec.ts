import { TestBed } from '@angular/core/testing';

import { GetQtableService } from './get-qtable.service';

describe('GetQtableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetQtableService = TestBed.get(GetQtableService);
    expect(service).toBeTruthy();
  });
});
