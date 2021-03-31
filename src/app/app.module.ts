import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavModule } from 'ngx-bottom-nav';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesComponent } from './pages/notes/notes.component';
import { PlanerComponent } from './pages/planer/planer.component';
import { HomeComponent } from './pages/home/home.component';
import { AtlasComponent } from './pages/atlas/atlas.component';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from './shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlphabetModule } from './pages/alphabet/alphabet.module';
import { HttpClientModule } from '@angular/common/http';
import {CONFIG, Config} from './model';
import { ExerciseService } from './core/exercise.service';

const config: Config = {
  apiUrl: 'http://localhost:8080/api'
};

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotesComponent,
    PlanerComponent,
    HomeComponent,
    AtlasComponent,
    PageNotFoundComponent,
    WelcomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BottomNavModule,
    MatIconModule,
    MatSliderModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    AlphabetModule,
    HttpClientModule
  ],
  providers: [
    ExerciseService,
    { provide: CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
