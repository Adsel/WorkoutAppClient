import {Component, Inject, Input, OnInit} from '@angular/core';
import {PlanerService} from '../../core/planer.service';
import {Config, CONFIG, Exercise, PlanExercise} from '../../model';
import {ExerciseService} from '../../core/exercise.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-planer-plan',
  templateUrl: './planer-plan.component.html',
  styleUrls: ['./planer-plan.component.scss']
})
export class PlanerPlanComponent implements OnInit {
  viewNameBold = 'Workout';
  viewNameRegular = 'Planer';
  viewNameThin = 'Plan #';
  exercises: PlanExercise[];
  exerciseCount: number;

  constructor(
    private planerService: PlanerService,
    private exerciseService: ExerciseService,
    private activatedRoute: ActivatedRoute,
    @Inject(CONFIG) private config: Config
  ) { }

  ngOnInit(): void {
    this.exercises = [];
    this.activatedRoute.params.subscribe(params => {
      const planId = params.id;
      this.planerService.getPlanExercises(planId).subscribe(exercises => {
        if (!!exercises && !!exercises.planExercises) {
          this.exerciseCount = exercises.planExercises.length;
          this.viewNameThin += planId;
          console.log('EX', exercises);
          exercises.planExercises.forEach(planExercise => {
            this.exerciseService.getExercise(planExercise.id_exercise).subscribe(exercise => {
              this.exercises.push({
                id: exercise.id,
                name: exercise.name,
                sets: planExercise.sets,
                reps: planExercise.reps,
                secs: planExercise.secs,
                other: planExercise.other
              });
            });
          });
        }
      });
    });
  }

}
