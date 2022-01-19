import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';



@NgModule({
  declarations: [],
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
  ])
  ],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
