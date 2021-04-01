import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetExercisesComponent } from './alphabet-exercises.component';

describe('AlphabetExercisesComponent', () => {
  let component: AlphabetExercisesComponent;
  let fixture: ComponentFixture<AlphabetExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
