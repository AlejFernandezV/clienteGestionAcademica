import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeriodoComponent } from './listar-periodo.component';

describe('ListarPeriodoComponent', () => {
  let component: ListarPeriodoComponent;
  let fixture: ComponentFixture<ListarPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
