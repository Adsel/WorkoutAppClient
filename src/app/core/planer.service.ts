import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatePlanDTO, Config, CONFIG, Plan, PlanCategoryDTO, PlanDTO, PlanExercisesDTO, PlansDTO} from '../model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanerService {
  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getPlanCategories(): Observable<PlansDTO> {
    return this.httpClient.get<PlansDTO>(`${this.config.apiUrl}/exercise-plans/plans`);
  }

  getPlanCategory(planCategoryId: number): Observable<PlanCategoryDTO> {
    return this.httpClient.get<PlanCategoryDTO>(`${this.config.apiUrl}/exercise-plans/categories/${planCategoryId}`);
  }

  getPlanExercises(planId: number): Observable<PlanExercisesDTO> {
    return this.httpClient.get<PlanExercisesDTO>(`${this.config.apiUrl}/exercise-plans/exercises/${planId}`);
  }

  activatePlan(activatePlanData: ActivatePlanDTO): Observable<PlanDTO> {
    return this.httpClient.post<PlanDTO>(`${this.config.apiUrl}/exercise-plans/activate`, activatePlanData);
  }
}
