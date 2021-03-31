import { Component, OnInit } from '@angular/core';
import { ExerciseCategory } from '../../../model';
import { ExerciseService } from '../../../core/exercise.service';

@Component({
  selector: 'app-alphabet-categories',
  templateUrl: './alphabet-categories.component.html',
  styleUrls: ['./alphabet-categories.component.scss']
})
export class AlphabetCategoriesComponent implements OnInit {
  viewNameBold = 'Exercise';
  viewNameRegular = 'Alphabet';
  categories: ExerciseCategory[];

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exerciseService.getExerciseCategories().subscribe(response => {
      this.categories = response.categories;
    });
  }
}
