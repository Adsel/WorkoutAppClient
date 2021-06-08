import {InjectionToken} from '@angular/core';

export interface Config {
  apiUrl: string;
  imagePlaceholderPath: string;
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

export interface UserDataResponse {
  user: UserData;
  resultMessage: string;
  loginStatus: string;
}

export interface UserRegisterDTO {
  email: string;
  password: string;
}

export interface UserLoginDTO {
  email: string;
  password: string;
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  videoUrl: string;
}

export interface PlanExercise {
  id: number;
  name: string;
  sets: number;
  reps: number;
  secs: number;
  other: string;
}

export interface ExercisesDTO {
  exercises: Exercise[];
  resultMessage: string;
  categoryStatus: string;
  categoryName: string;
  categoryId: number;
}

export interface PlanCategoryDTO {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface PlanDTO {
  id: number;
  name: string;
  description: string;
  image: string;
  training_plan_category_id: number;
}

export interface PlansDTO {
  plans: PlanDTO[];
}

export interface Plan {
  id: number;
  name: string;
  description: string;
  image: string;
  categoryId: number;
  categoryName: string;
}

export interface PlanExerciseDTO {
  id: number;
  id_training_plan: number;
  id_exercise: number;
  day_type: number;
  sets: number;
  reps: number;
  secs: number;
  other: string;
}

export interface PlanExercisesDTO {
  planExercises: PlanExerciseDTO[];
}

export interface ActivatePlanDTO {
  planId: number;
  userId: number;
}

export const CONFIG = new InjectionToken<Config>('app.config');
