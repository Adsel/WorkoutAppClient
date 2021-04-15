import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG, PlanCategoryDTO, PlansDTO} from '../model';
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
}
