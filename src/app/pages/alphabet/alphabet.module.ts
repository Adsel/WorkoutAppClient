import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetCategoriesComponent } from './alphabet-categories/alphabet-categories.component';
import { RouterModule } from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from "@angular/material/stepper";
import { AlphabetHeaderComponent } from './alphabet-header/alphabet-header.component';

const routes = [
  { path: 'exercises/categories', component: AlphabetCategoriesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AlphabetCategoriesComponent,
    AlphabetHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSliderModule,
    MatIconModule,
    MatStepperModule
  ],
  exports: [
    AlphabetCategoriesComponent
  ]
})
export class AlphabetModule { }
