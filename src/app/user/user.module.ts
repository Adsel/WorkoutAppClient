import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data/user-data.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'user', component: UserDataComponent },
];

@NgModule({
  declarations: [UserDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
