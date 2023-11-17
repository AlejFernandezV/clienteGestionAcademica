import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDocenteComponent } from './create-docente.component';

describe('CreateDocenteComponent', () => {
  let component: CreateDocenteComponent;
  let fixture: ComponentFixture<CreateDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
