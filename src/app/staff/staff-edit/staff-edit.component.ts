import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  pageTitle : string = 'Edit Staff Data';
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: '',
      name: '',
      type: '',
      department: '',
      area: '',
      position: '',
      salary: ''
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

}
