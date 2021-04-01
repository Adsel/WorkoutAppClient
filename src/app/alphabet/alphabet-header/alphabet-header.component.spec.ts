import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetHeaderComponent } from './alphabet-header.component';

describe('AlphabetHeaderComponent', () => {
  let component: AlphabetHeaderComponent;
  let fixture: ComponentFixture<AlphabetHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
