import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../staff.service';
import { IStaff } from '../staff';
import Swal from 'sweetalert2';
import { map } from 'rxjs';

@Component({
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  pageTitle: string = 'Staff Data';
  myForm!: FormGroup;
  staff!: IStaff[];
  id!: string | null;

  constructor(private _fb: FormBuilder, private _service: StaffService, private _route: ActivatedRoute, private _router: Router) {
    this.myForm = this._fb.group({
      dui: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]{8}-[0-9]{1}$')]],
      staffName: ['', [Validators.required, Validators.maxLength(40)]],
      staffLastName: ['', [Validators.required, Validators.maxLength(40)]],
      staffType: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', [Validators.required, Validators.maxLength(40)]],
      salary: ['', [Validators.required, Validators.min(350)]],
    });
  }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getStaff(this.id);
  }

  save(): void {
    if (this.id != '0') {
      Swal.fire({
        icon: 'warning',
        iconColor: '#E52121',
        title: 'Do you want to update this data?',
        text: 'Staff: ' + this.myForm.get('staffName')?.value + ' ' + this.myForm.get('staffLastName')?.value,
        showCancelButton: true,
        showConfirmButton: true,
        position: 'center'
      }).then((result) => {
        if (result.isConfirmed) {
          this._service.updateStaff(this.myForm.value, this.id);
          Swal.fire(
            {
              title: 'Data Updated',
              icon: 'success',
              timer: 1000,
              showConfirmButton: false,
              position: 'center'
            }
          )
          this._router.navigateByUrl("/staff");
        }
      });
    } else {
      this._service.createStaff(this.myForm.value);
      Swal.fire(
        {
          title: 'Data Saved',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
          position: 'center'
        }
      )
      this._router.navigateByUrl("/staff");
    }
  }

  getStaff(id: any) {
    if (id != 0) {
      this._service.specifiedStaff$(id).subscribe(data => {
        this.myForm.setValue(data);
      });
    }
  }

  clean(id: any) {
    if (id != 0) {
      this.myForm.get('staffName')?.reset();
      this.myForm.get('staffLastName')?.reset();
      this.myForm.get('position')?.reset();
      this.myForm.get('department')?.reset();
      this.myForm.get('staffType')?.reset();
    } else this.myForm.reset();
  }

}
