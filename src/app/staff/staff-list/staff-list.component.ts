import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { IStaff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  pageTitle: string = 'Staff List';
  staff!: IStaff[];
  filterForm!: FormGroup;
  showFilter: boolean = false;

  constructor(private _fb: FormBuilder, private _staffService: StaffService) {
    this.filterForm = this._fb.group({
      type: [''],
      value: ['']
    });
  }

  ngOnInit(): void {
    /* this._staffService.getStaff().subscribe((res: IStaff[]) => {
      this.staff = res;
    }) */
    this.filterData('','');
  }

  filterData(type: string,value: string) {
    console.log(type+''+value);
    this._staffService.readStaff().subscribe((res: IStaff[]) => {
        switch (type) {
          case 'First Name':
            this.staff = res.filter(
              item => item.staffName.includes(value)
            );
            break;
          case 'Last Name':
            this.staff = res.filter(
              item => item.staffLastName.includes(value)
            );
            break;
          case 'Department':
            this.staff = res.filter(
              item => item.department.includes(value)
            );
            break;
          case 'No Filter':
            this.staff = res;
            break;
          case 'Dui':
            this.staff = res.filter(
              item => item.dui.includes(value)
            );
            break;
          case 'Type':
            this.staff = res.filter(
              item => item.staffType.includes(value)
            );
            break;
          default:
            this.staff = res;
            break;
        }
    })
  }

  deleteStaff(staff: IStaff) {
    //this._staffService.supressStaff(staff);
    console.log(staff);
    Swal.fire({
      icon: 'warning',
      iconColor: '#E52121',
      title: 'Do you want to delete this data?',
      text: 'Staff: ' + staff.staffName + ' ' + staff.staffLastName,
      showCancelButton: true,
      showConfirmButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._staffService.deleteStaff(staff).then(() => console.log('Dato Eliminado'));
      }
    })
  }

  show(): boolean{
    return (this.showFilter)? this.showFilter = false: this.showFilter = true;
  }

}
