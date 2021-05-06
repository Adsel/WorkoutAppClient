import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanerListComponent } from './planer-list/planer-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PlanerPlanComponent } from './planer-plan/planer-plan.component';

const routes = [
  { path: 'planer/list', component: PlanerListComponent, data: { animation: 'planner-list' }  },
  { path: 'planer/:id', component: PlanerPlanComponent, data: { animation: 'planner-id' }  }
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
