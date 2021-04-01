import {InjectionToken} from '@angular/core';

export interface Config {
  apiUrl: string;
  alphabetPlaceholderPath: string;
}

export interface ExerciseCategory {
  name: string;
  id: number;
  image: string;
}

export interface ExerciseCategoryDTO {
  categories: ExerciseCategory[];
}

export const CONFIG = new InjectionToken<Config>('app.config');
