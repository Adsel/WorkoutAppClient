import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AtlasComponent} from './core/atlas/atlas.component';
import {HomeComponent} from './core/home/home.component';
import {UserComponent} from './core/user/user.component';
import {NotesComponent} from './core/notes/notes.component';
import {PlanerComponent} from './core/planer/planer.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'atlas', component: AtlasComponent },
  { path: 'user', component: UserComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'planer', component: PlanerComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
