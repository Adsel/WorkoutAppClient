import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AtlasComponent} from './pages/atlas/atlas.component';
import {HomeComponent} from './pages/home/home.component';
import {UserComponent} from './pages/user/user.component';
import {NotesComponent} from './pages/notes/notes.component';
import {PlanerComponent} from './pages/planer/planer.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'atlas', component: AtlasComponent },
  { path: 'user', component: UserComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'planer', component: PlanerComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

// configures NgModule imports and exports

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule { }
