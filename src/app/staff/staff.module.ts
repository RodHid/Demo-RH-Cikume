import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { 
                path: '',
                component: StaffListComponent 
            },
            {
                path: ':id/edit',
                component: StaffEditComponent 
            },
        ]),
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule
    ],
    declarations: [StaffListComponent, StaffEditComponent],
})
export class StaffModule { }
