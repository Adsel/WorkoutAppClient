import {Component, Inject, OnInit} from '@angular/core';
import {Config, CONFIG, PlanExercise} from '../../model';
import {PlanerService} from '../../core/planer.service';
import {ExerciseService} from '../../core/exercise.service';
import {UserService} from '../../core/user.service';
import {LoginService} from '../../core/login.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-notes-plan',
  templateUrl: './notes-plan.component.html',
  styleUrls: ['./notes-plan.component.scss']
})
export class NotesPlanComponent implements OnInit {
  viewNameBold = 'Notes';
  viewNameRegular = 'Active Plan';
  exercises: PlanExercise[];
  exerciseCount: number;
  planId: number;

  constructor(
    private planerService: PlanerService,
    private exerciseService: ExerciseService,
    private userService: UserService,
    private authService: LoginService,
    private activatedRoute: ActivatedRoute,
    @Inject(CONFIG) private config: Config
  ) { }

  ngOnInit(): void {
    this.exercises = [];
    const userId = this.authService.getLoggedUser().id;
    this.userService.getUserData(userId).subscribe((userData) => {
      this.planerService.getPlanExercises(userData.plan).subscribe(exercises => {
        if (!!exercises && !!exercises.planExercises) {
          this.exerciseCount = exercises.planExercises.length;

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
