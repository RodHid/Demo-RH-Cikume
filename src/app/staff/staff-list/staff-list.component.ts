import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  pageTitle : string = 'Staff List';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
