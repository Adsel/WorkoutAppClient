import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerListComponent } from './planner-list/planner-list.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from "../shared/shared.module";

const routes = [
  { path: 'planner/list', component: PlannerListComponent },
];


@NgModule({
  declarations: [PlannerListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PlannerModule { }
