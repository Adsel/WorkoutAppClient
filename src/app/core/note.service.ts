import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG, TrainingRowsDTO} from '../model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getTodayTrainingRows(userId: number): Observable<TrainingRowsDTO> {
    return this.httpClient.get<TrainingRowsDTO>(`${this.config.apiUrl}/training-rows/${userId}/today`);
  }
}
