import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPlanComponent } from './notes-plan/notes-plan.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from '../core/auth-guard.service';

const routes: Routes = [
  { path: 'notes', component: NotesPlanComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [NotesPlanComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ]
})
export class NotesModule { }
