import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG, TrainingRowsDTO, UserTrainingDayDTO} from '../model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getTodayTrainingRows(userId: number): Observable<UserTrainingDayDTO[]> {
    return this.httpClient.get<UserTrainingDayDTO[]>(`${this.config.apiUrl}/training-rows/${userId}/today`);
  }
}
