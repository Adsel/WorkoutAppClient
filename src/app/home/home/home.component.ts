import {Component, Inject, OnInit} from '@angular/core';
import {Config, CONFIG, Exercise, Plan} from '../../model';
import {PlanerService} from '../../core/planer.service';
import {ExerciseService} from '../../core/exercise.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viewNameBold = 'Workout';
  viewNameRegular = 'Home Page';
  viewNameThin = '';
  plans: Plan[];
  exercises: Exercise[];

  constructor(
    private planerService: PlanerService,
    private exerciseService: ExerciseService,
    @Inject(CONFIG) private config: Config
  ) { }

  ngOnInit(): void {
    this.plans = [];
    this.planerService.getPlanCategories().subscribe(response => {
      if (!!response && !!response.plans) {
        response.plans.forEach(plan => {
          this.planerService.getPlanCategory(plan.training_plan_category_id).subscribe(category => {
            this.plans.push({
              id: plan.id,
              name: plan.name,
              description: plan.description,
              image: plan.image,
              categoryId: category.id,
              categoryName: category.name
            });
          });
        });
      }
    });
    this.exerciseService.getExercises().subscribe(response => {
      const categoryExists = response.categoryStatus === 'EXISTS';
      if (categoryExists) {
        this.exercises = response.exercises; }
    });
  }

}
