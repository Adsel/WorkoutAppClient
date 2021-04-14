import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanerListComponent } from './planer-list/planer-list.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes = [
  { path: 'planer/list', component: PlanerListComponent },
];


@NgModule({
  declarations: [PlanerListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PlanerModule { }
