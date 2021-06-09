import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPlanComponent } from './notes-plan.component';

describe('NotesPlanComponent', () => {
  let component: NotesPlanComponent;
  let fixture: ComponentFixture<NotesPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
