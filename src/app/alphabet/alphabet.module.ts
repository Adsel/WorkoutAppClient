import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetCategoriesComponent } from './alphabet-categories/alphabet-categories.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { AlphabetHeaderComponent } from './alphabet-header/alphabet-header.component';
import { SharedModule } from '../shared/shared.module';
import { AlphabetExercisesComponent } from './alphabet-exercises/alphabet-exercises.component';

const routes = [
  { path: 'exercises/categories', component: AlphabetCategoriesComponent },
  { path: 'exercises/category/:id', component: AlphabetExercisesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AlphabetCategoriesComponent,
    AlphabetHeaderComponent,
    AlphabetExercisesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    AlphabetCategoriesComponent
  ]
})
export class AlphabetModule { }
