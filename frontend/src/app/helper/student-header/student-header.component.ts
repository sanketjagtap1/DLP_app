import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss'],
})
export class StudentHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  logout(){
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
