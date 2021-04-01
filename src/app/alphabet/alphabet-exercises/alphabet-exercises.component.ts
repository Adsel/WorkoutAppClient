import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseService } from '../../core/exercise.service';
import { Exercise } from '../../model';

@Component({
  selector: 'app-alphabet-exercises',
  templateUrl: './alphabet-exercises.component.html',
  styleUrls: ['./alphabet-exercises.component.scss']
})
export class AlphabetExercisesComponent implements OnInit {
  viewNameBold = 'Exercise';
  viewNameRegular = 'Alphabet';
  categoryExists = false;
  categoryName: string = null;
  public exercises: Exercise[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        const categoryId = params.id;
        this.exerciseService.getExerciseByCategory(categoryId).subscribe(response => {
          const categoryExists = response.categoryStatus === 'EXISTS';
          this.categoryExists = categoryExists;
          if (categoryExists) {
            this.exercises = response.exercises;
            this.categoryName = response.categoryName;
          }
        });
      });
  }
}
