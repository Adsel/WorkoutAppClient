import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanerPlanComponent } from './planer-plan.component';

describe('PlanerPlanComponent', () => {
  let component: PlanerPlanComponent;
  let fixture: ComponentFixture<PlanerPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanerPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanerPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
