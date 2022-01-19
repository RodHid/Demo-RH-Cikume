import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { StaffRoutingModule } from './staff.routing.module';

@NgModule({
    imports: [
        CommonModule,
        StaffRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,
    ],
    declarations: [StaffListComponent, StaffEditComponent],
})
export class StaffModule { }
