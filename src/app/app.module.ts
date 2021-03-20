import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BottomNavModule} from 'ngx-bottom-nav';
import {MatIconModule} from '@angular/material/icon';
import { FirstComponent } from './core/first/first.component';
import { SecondComponent } from './core/second/second.component';

import { AppRoutingModule } from './app-routing.module';
import {MatSliderModule} from '@angular/material/slider'; // CLI imports AppRoutingModule


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BottomNavModule,
    MatIconModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
