import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanerListComponent } from './planer-list/planer-list.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { PlanerPlanComponent } from './planer-plan/planer-plan.component';
import {AuthGuard} from '../core/auth-guard.service';

const routes = [
  { path: 'planer/list', component: PlanerListComponent, canActivate: [AuthGuard] },
  { path: 'planer/:id', component: PlanerPlanComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [PlanerListComponent, PlanerPlanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PlanerModule { }
