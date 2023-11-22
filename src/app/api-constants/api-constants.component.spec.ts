import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConstantsComponent } from './api-constants.component';

describe('ApiConstantsComponent', () => {
  let component: ApiConstantsComponent;
  let fixture: ComponentFixture<ApiConstantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiConstantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiConstantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
