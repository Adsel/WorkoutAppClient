import {Component, Inject, OnInit} from '@angular/core';
import {Config, CONFIG, UserTrainingDayDTO} from '../../model';
import {LoginService} from '../../core/login.service';
import {ActivatedRoute} from '@angular/router';
import {NoteService} from '../../core/note.service';

@Component({
  selector: 'app-notes-plan',
  templateUrl: './notes-plan.component.html',
  styleUrls: ['./notes-plan.component.scss']
})
export class NotesPlanComponent implements OnInit {
  viewNameBold = 'Notes';
  viewNameRegular = 'Active Plan';
  currentDayRows: UserTrainingDayDTO[];
  exerciseCount: number;
  planId: number;

  constructor(
    private authService: LoginService,
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    @Inject(CONFIG) private config: Config
  ) {
  }

  ngOnInit(): void {
    this.currentDayRows = [];
    const userId = this.authService.getLoggedUserId();

    this.noteService.getTodayTrainingRows(userId).subscribe((trainingRows) => {
      this.currentDayRows = trainingRows;
      this.exerciseCount = this.currentDayRows.length;
    });
  }

  saveNote(exercise: UserTrainingDayDTO): void {
    this.noteService.saveNote(exercise).subscribe((response) => {
      console.log('saveNote response', response);
    });
  }
}
