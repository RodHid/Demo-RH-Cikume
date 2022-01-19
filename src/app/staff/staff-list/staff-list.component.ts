import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { delay, filter, map, pipe } from 'rxjs';
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
  total!: number;
  config!: any;
  p: number = 1;
  collection = [];
  showSpinner: boolean = true;

  constructor(private _fb: FormBuilder, private _staffService: StaffService) {
    this.filterForm = this._fb.group({
      type: [''],
      value: ['']
    });
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.length
    }
  }

  pageConfig(staff: IStaff[]){
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: staff.length
    }
  }

  ngOnInit(): void {
    this.rxjsUse('','');
  }

  deleteStaff(staff: IStaff) {
    console.log(staff);
    Swal.fire({
      icon: 'warning',
      iconColor: '#E52121',
      title: 'Do you want to delete this data?',
      text: 'Staff: ' + staff.staffName + ' ' + staff.staffLastName,
      showCancelButton: true,
      showConfirmButton: true,
      position: 'center'
    }).then((result) => {
      if (result.isConfirmed) {
        this._staffService.deleteStaff(staff).then(() => console.log('Dato Eliminado'));
        Swal.fire(
          {
            title: 'Data Deleted',
            icon: 'success',
            timer: 1000,
            showConfirmButton: false,
            position: 'center'
          }
        )
      }
    });
  }

  show(): boolean{
    this.filterForm.reset();
    return (this.showFilter)? this.showFilter = false: this.showFilter = true;
  }

  rxjsUse(type: string,value: string) {
    (type === 'No filter' && value === '')? this.filterForm.reset():'';

    this._staffService.readStaff$().pipe(
      map(x => x.filter(data => {
        switch (type) {
          case 'First Name':
            return data.staffName.includes(value)
            break;
          case 'Last Name':
            return data.staffLastName.includes(value)
            break;
          case 'Department':
            return data.department.includes(value)
            break;
          case 'No Filter':
            return data
            break;
          case 'Dui':
            return data.dui.includes(value)
            break;
          case 'Type':
            return data.staffType.includes(value)
            break;
          default:
            return data
            break;
        }
      }))
    ).subscribe(x => {
      this.showSpinner = false;
      //console.log(x);
      this.staff = x;
      this.getSpreadsheet(this.staff);
    });
  }

  getSpreadsheet(staff: IStaff[]): void{
    this.total = 0;
    staff.forEach(element => {
      this.total += element.salary;
    });
  }

}
