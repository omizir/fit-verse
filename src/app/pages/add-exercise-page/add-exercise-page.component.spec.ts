import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExercisePageComponent } from './add-exercise-page.component';

describe('AddExercisePageComponent', () => {
  let component: AddExercisePageComponent;
  let fixture: ComponentFixture<AddExercisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExercisePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddExercisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
