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

export interface UserData {
  id: number;
  email: string;
}

export interface UserRegisterDTO {
  email: string;
  password: string;
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  videoUrl: string;
}

export interface ExercisesDTO {
  exercises: Exercise[];
  resultMessage: string;
  categoryStatus: string;
  categoryName: string;
  categoryId: number;
}

export const CONFIG = new InjectionToken<Config>('app.config');
