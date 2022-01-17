import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StaffService } from '../staff.service';
import { IStaff } from '../staff';

@Component({
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  pageTitle : string = 'Staff Data';
  myForm!: FormGroup;
  staff!: IStaff;
  id!: string | null;

  constructor(private _fb: FormBuilder, private _service: StaffService, private _route: ActivatedRoute, private _router: Router) {
    this.myForm = this._fb.group({
      dui: ['', [Validators.required, Validators.maxLength(9)]],
      staffName: ['', [Validators.required, Validators.maxLength(40)]],
      staffLastName: ['', [Validators.required, Validators.maxLength(40)]],
      staffType: ['', Validators.required],
      department: ['', Validators.required],      
      position: ['', Validators.required],
      salary: ['', [Validators.minLength(3), Validators.required]],
    });
   }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getStaff(this.id);
  }

  save(): void{
    if(this.id != '0'){
      this._service.updateStaff(this.myForm.value, this.id);
    } else{
      //this._service.createStaff(this.myForm.value).then(() => this.myForm.reset());
      this._service.addStaff(this.myForm.value);
    }
    this._router.navigateByUrl("/staff");
  }

  getStaff(id: any) {
    this._service.specifiedStaff(id).subscribe( data => {
      //console.log(data);
      this.myForm.setValue(data);
    })
  }
}
