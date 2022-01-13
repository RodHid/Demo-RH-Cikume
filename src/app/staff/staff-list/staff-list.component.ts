import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IStaff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  pageTitle : string = 'Staff List';
  sub!: Subscription;
  staff!: IStaff[];
  
  constructor(private route: ActivatedRoute, private staffService : StaffService) { }

  ngOnInit(): void {
    /* this.sub = this.staffService.getStaff().subscribe({
      next: staff => {
        this.staff = staff;

      }
    }) */
  }

}
