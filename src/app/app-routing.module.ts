import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesPlanComponent} from './notes/notes-plan/notes-plan.component';

const routes: Routes = [
  { path: 'notes', component: NotesPlanComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

// configures NgModule imports and exports

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule { }
