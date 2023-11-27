import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAutoevaComponent } from './ver-autoeva.component';

describe('VerAutoevaComponent', () => {
  let component: VerAutoevaComponent;
  let fixture: ComponentFixture<VerAutoevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAutoevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerAutoevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
