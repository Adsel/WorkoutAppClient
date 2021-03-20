import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecondComponent} from './core/second/second.component';
import {FirstComponent} from './core/first/first.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
