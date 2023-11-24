import { TestBed } from '@angular/core/testing';

import { RolDocenteGuard } from './rol-docente.guard';

describe('RolDocenteGuard', () => {
  let guard: RolDocenteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolDocenteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
