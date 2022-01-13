import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo-RH';

  constructor (private router: Router) {}
}
