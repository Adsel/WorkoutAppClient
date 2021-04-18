import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetCategoriesComponent } from './alphabet-categories/alphabet-categories.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { AlphabetExercisesComponent } from './alphabet-exercises/alphabet-exercises.component';
import { AlphabetDetailsComponent } from './alphabet-details/alphabet-details.component';
import {EmbedVideo} from "ngx-embed-video";

const routes = [
  { path: 'exercises/categories', component: AlphabetCategoriesComponent },
  { path: 'exercises/category/:id', component: AlphabetExercisesComponent },
  { path: 'exercises/exercise/:id', component: AlphabetDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AlphabetCategoriesComponent,
    AlphabetExercisesComponent,
    AlphabetDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    EmbedVideo.forRoot()
  ],
  exports: [
    AlphabetCategoriesComponent
  ]
})
export class AlphabetModule { }
