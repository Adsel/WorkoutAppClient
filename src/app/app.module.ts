import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BottomNavModule} from 'ngx-bottom-nav';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesComponent } from './core/notes/notes.component';
import { PlanerComponent } from './core/planer/planer.component';
import { HomeComponent } from './core/home/home.component';
import { AtlasComponent } from './core/atlas/atlas.component';
import {UserComponent} from './core/user/user.component'; // CLI imports AppRoutingModule


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotesComponent,
    PlanerComponent,
    HomeComponent,
    AtlasComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BottomNavModule,
    MatIconModule,
    MatSliderModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
