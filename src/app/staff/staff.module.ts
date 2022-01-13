import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        FormsModule
    ],
    declarations: [StaffListComponent, StaffEditComponent],
})
export class StaffModule { }
