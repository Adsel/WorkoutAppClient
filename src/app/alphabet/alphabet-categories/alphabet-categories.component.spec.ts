import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetCategoriesComponent } from './alphabet-categories.component';

describe('AlphabetCategoriesComponent', () => {
  let component: AlphabetCategoriesComponent;
  let fixture: ComponentFixture<AlphabetCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
