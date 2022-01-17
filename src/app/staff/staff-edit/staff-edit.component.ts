import { IStaffResolved } from './../staff';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StaffService } from '../staff.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { IStaff } from '../staff';

@Component({
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  pageTitle : string = 'Edit Staff Data';
  myForm!: FormGroup;
  staff!: IStaff[];
  id!: string | null;
  cmbArea!: [];

  constructor(private _fb: FormBuilder, private _service: StaffService, private _route: ActivatedRoute) {
    this.myForm = this._fb.group({
      dui: ['', Validators.required, Validators.minLength(9), Validators.maxLength(9)],
      staffName: ['', Validators.required],
      staffLastName: ['', Validators.required],
      staffType: ['', Validators.required],
      department: ['', Validators.required],      
      position: ['', Validators.required],
      salary: ['', [Validators.minLength(3), Validators.required]],
    });
   }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getStaff(this.id);
    this.myForm.valueChanges.subscribe(console.log);
    this.myForm.get('department')?.valueChanges.subscribe(console.log);
  }

  save(): void{
    this._service.createStaff(this.myForm.value).then(() => this.myForm.reset());
  }

  update() {
    //this._service.updateStaff(staff);
  }
  
  getStaff(id: any) {
    this._service.specifiedStaff(id).subscribe(data => {
      const stResolved: IStaffResolved = data['resolvedData'];
    });
  }
}
