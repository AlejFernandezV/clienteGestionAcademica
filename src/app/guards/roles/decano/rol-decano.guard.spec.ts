import { TestBed } from '@angular/core/testing';

import { RolDecanoGuard } from './rol-decano.guard';

describe('RolDecanoGuard', () => {
  let guard: RolDecanoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolDecanoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
