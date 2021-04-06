import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CONFIG, Config, ExerciseCategoryDTO, ExercisesDTO} from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getExerciseCategories(): Observable<ExerciseCategoryDTO> {
    return this.httpClient.get<ExerciseCategoryDTO>(`${this.config.apiUrl}/exercise-alphabet/categories`);
  }

  getExerciseByCategory(categoryId: number): Observable<ExercisesDTO> {
    return this.httpClient.get<ExercisesDTO>(`${this.config.apiUrl}/exercise-alphabet/category-exercises/${categoryId}`);
  }
}
