import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StaffService } from '../staff.service';

@Component({
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  pageTitle : string = 'Edit Staff Data';
  myForm!: FormGroup;
  cmbArea!: [];

  constructor(private _fb: FormBuilder, private _service: StaffService) {
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
    this.myForm.valueChanges.subscribe(console.log);
    this.myForm.get('department')?.valueChanges.subscribe(console.log);
  }

  save(): void{
    this._service.createStaff(this.myForm.value).then(() => this.myForm.reset());
  }

  update() {
    //this._service.updateStaff(staff);
  }
  
}
