import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data/user-data.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from '../core/auth-guard.service';

const routes: Routes = [
  { path: 'user', component: UserDataComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [UserDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
