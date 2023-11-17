import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAutoevaluacionComponent } from './l-autoevaluacion.component';

describe('LAutoevaluacionComponent', () => {
  let component: LAutoevaluacionComponent;
  let fixture: ComponentFixture<LAutoevaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAutoevaluacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAutoevaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
