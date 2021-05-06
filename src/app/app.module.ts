import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavModule } from 'ngx-bottom-nav';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesComponent } from './pages/notes/notes.component';
import { AtlasComponent } from './pages/atlas/atlas.component';
import { UserComponent } from './pages/user/user.component';

import { AlphabetModule } from './alphabet/alphabet.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { CONFIG, Config } from './model';
import { ExerciseService } from './core/exercise.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanerModule } from './planer/planer.module';

const config: Config = {
  apiUrl: 'http://localhost:8080/api',
  imagePlaceholderPath: '/assets/image/alphabet/placeholder.jpg'
};

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotesComponent,
    AtlasComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BottomNavModule,
    MatIconModule,
    MatSliderModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    HomeModule,
    PlanerModule,
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
