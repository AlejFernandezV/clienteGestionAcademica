import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPeriodoComponent } from './actualizar-periodo.component';

describe('ActualizarPeriodoComponent', () => {
  let component: ActualizarPeriodoComponent;
  let fixture: ComponentFixture<ActualizarPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
