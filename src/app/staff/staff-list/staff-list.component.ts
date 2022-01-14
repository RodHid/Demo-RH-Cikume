import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { IStaff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  pageTitle: string = 'Staff List';
  sub!: Subscription;
  staff!: IStaff[];

  constructor(private _route: ActivatedRoute, private _staffService: StaffService) { }

  ngOnInit(): void {
    this._staffService.readStaff().subscribe((res: IStaff[]) => {
      this.staff = res;
    })
  }

  deleteStaff(staff: IStaff) {
    console.log(staff);
    Swal.fire({
      icon: 'warning',
      title: 'Do you want to delete '+staff.staffName+' '+staff.staffLastName+' data?',
      showCancelButton: true,
      showConfirmButton: true
    }).then((result) => {
      if(result.isConfirmed){
        this._staffService.deleteStaff(staff).then(() => console.log('Dato Eliminado'));
      }
    })
  }

}
