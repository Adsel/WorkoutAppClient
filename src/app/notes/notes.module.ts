import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPlanComponent } from './notes-plan/notes-plan.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [NotesPlanComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule
    ]
})
export class NotesModule { }
