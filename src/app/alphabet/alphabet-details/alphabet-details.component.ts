import {Component, Inject, OnInit} from '@angular/core';
import {Config, CONFIG, Exercise } from '../../model';
import {ExerciseService} from '../../core/exercise.service';
import {ActivatedRoute} from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-alphabet-details',
  templateUrl: './alphabet-details.component.html',
  styleUrls: ['./alphabet-details.component.scss']
})
export class AlphabetDetailsComponent implements OnInit {
  exercise: Exercise;
  viewNameBold = 'WORKOUT';
  viewNameRegular = 'Exercise';
  exerciseExists = false;
  iFrameYoutube: any;
  viewDesc = 'Description';

  constructor(
    private activatedRoute: ActivatedRoute,
    private exerciseService: ExerciseService,
    @Inject(CONFIG) private config: Config,
    private embedService: EmbedVideoService

) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const exerciseId = params.id;
      this.exerciseService.getExercise(exerciseId).subscribe(response => {
        this.exerciseExists =  (!!response.name && response.name.length !== 0);
        console.log(this.exerciseExists);
        if (this.exerciseExists) {
          this.exercise = response;
          this.viewNameRegular = response.name;
          this.iFrameYoutube = this.embedService.embed(response.videoUrl);
        }
      });
    });
  }

}
