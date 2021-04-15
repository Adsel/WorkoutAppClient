import {Component, Inject, Input, OnInit} from '@angular/core';
import {PlanerService} from '../../core/planer.service';
import {Config, CONFIG, Exercise} from '../../model';
import {ExerciseService} from "../../core/exercise.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-planer-plan',
  templateUrl: './planer-plan.component.html',
  styleUrls: ['./planer-plan.component.scss']
})
export class PlanerPlanComponent implements OnInit {
  viewNameBold = 'Planer';
  viewNameRegular = 'Plan #';
  exercises: Exercise[];

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
          this.viewNameRegular += planId;
          exercises.planExercises.forEach(planExercise => {
            this.exerciseService.getExercise(planExercise.id_exercise).subscribe(exercise => {
              this.exercises.push({
                id: exercise.id,
                name: exercise.name,
                description: exercise.description,
                videoUrl: exercise.videoUrl
              });
            });
          });
        }
      });
    });
  }

}
