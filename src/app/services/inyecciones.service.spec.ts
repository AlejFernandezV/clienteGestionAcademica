import { TestBed } from '@angular/core/testing';

import { InyeccionesService } from './inyecciones.service';

describe('InyeccionesService', () => {
  let service: InyeccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InyeccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
