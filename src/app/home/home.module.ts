import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import {MatDividerModule} from '@angular/material/divider';
import {SharedModule} from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    WelcomeComponent,
    HomeComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatStepperModule,
        MatIconModule,
        MatDividerModule,
        SharedModule,
        ReactiveFormsModule
    ],
  exports: [
    WelcomeComponent
  ]
})
export class HomeModule { }
