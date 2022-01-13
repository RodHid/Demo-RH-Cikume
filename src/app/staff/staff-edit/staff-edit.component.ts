import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  pageTitle : string = 'Edit Staff Data';
  myForm!: FormGroup;
  cmbArea!: [];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      type: ['', Validators.required],
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

  }

  
}
