import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BottomNavModule} from 'ngx-bottom-nav';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesComponent } from './pages/notes/notes.component';
import { PlanerComponent } from './pages/planer/planer.component';
import { HomeComponent } from './pages/home/home.component';
import { AtlasComponent } from './pages/atlas/atlas.component';
import {UserComponent} from './pages/user/user.component';
import {SharedModule} from './shared/shared.module';

import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotesComponent,
    PlanerComponent,
    HomeComponent,
    AtlasComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
