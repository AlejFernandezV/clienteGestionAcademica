import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarAutoevaComponent } from './enviar-autoeva.component';

describe('EnviarAutoevaComponent', () => {
  let component: EnviarAutoevaComponent;
  let fixture: ComponentFixture<EnviarAutoevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarAutoevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarAutoevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
