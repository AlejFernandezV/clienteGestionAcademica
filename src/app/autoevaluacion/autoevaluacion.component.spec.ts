import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoevaluacionComponent } from './autoevaluacion.component';

describe('AutoevaluacionComponent', () => {
  let component: AutoevaluacionComponent;
  let fixture: ComponentFixture<AutoevaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoevaluacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoevaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
