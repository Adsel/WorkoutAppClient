import {Component, Inject, Input, OnInit} from '@angular/core';
import {PlanerService} from '../../core/planer.service';
import {Config, CONFIG, Exercise, PlanExercise} from '../../model';
import {ExerciseService} from '../../core/exercise.service';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from "../../core/login.service";

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
  planId: number;

  constructor(
    private planerService: PlanerService,
    private exerciseService: ExerciseService,
    private authService: LoginService,
    private activatedRoute: ActivatedRoute,
    @Inject(CONFIG) private config: Config
  ) { }

  ngOnInit(): void {
    this.exercises = [];
    this.activatedRoute.params.subscribe(params => {
      const planId = params.id;
      this.planerService.getPlanExercises(planId).subscribe(exercises => {
        if (!!exercises && !!exercises.planExercises) {
          // tslint:disable-next-line:radix
          this.planId = parseInt(planId);
          this.exerciseCount = exercises.planExercises.length;
          this.viewNameThin += planId;

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

  getThisPlan(): void {
    this.planerService.activatePlan({
      planId: this.planId,
      userId: this.authService.getLoggedUser()?.id
    }).subscribe(() => {});
  }
}
