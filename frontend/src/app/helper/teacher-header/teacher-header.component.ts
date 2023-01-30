import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.scss'],
})
export class TeacherHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  logout(){
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
