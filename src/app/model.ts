import {InjectionToken} from '@angular/core';

export interface Config {
  apiUrl: string;
}

export interface ExerciseCategory {
  name: string;
}

export const CONFIG = new InjectionToken<Config>('app.config');
