import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG, Config, ExerciseCategory } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getExerciseCategories(): Observable<ExerciseCategory[]> {
    return this.httpClient.get<ExerciseCategory[]>(`${this.config.apiUrl}/exercise-categories`);
  }
}
