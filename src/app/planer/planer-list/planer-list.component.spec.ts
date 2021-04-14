import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanerListComponent } from './planer-list.component';

describe('PlannerListComponent', () => {
  let component: PlanerListComponent;
  let fixture: ComponentFixture<PlanerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
