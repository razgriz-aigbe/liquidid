import { TestBed } from '@angular/core/testing';

import { KeyManagerService } from './key-manager.service';

describe('KeyManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyManagerService = TestBed.get(KeyManagerService);
    expect(service).toBeTruthy();
  });
});
