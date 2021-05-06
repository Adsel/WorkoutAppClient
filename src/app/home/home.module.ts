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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

const routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'welcome', component: WelcomeComponent, data: { animation: 'welcome' } },
  { path: 'register', component: RegisterComponent, data: { animation: 'register' } },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } }
];

@NgModule({
  declarations: [
    WelcomeComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    MatIconModule,
    MatDividerModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    WelcomeComponent
  ]
})
export class HomeModule { }
