import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetCategoriesComponent } from './alphabet-categories/alphabet-categories.component';
import { RouterModule } from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes = [
  { path: 'exercises/categories', component: AlphabetCategoriesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AlphabetCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AlphabetCategoriesComponent
  ]
})
export class AlphabetModule { }
