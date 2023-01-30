import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


  teacherCount: any;
  studentCount: any;
  courseCount: any;
  userType:any;

  constructor(private authSrv: AuthService,
    private router: Router) { }

  ngOnInit() {
    
    this.userType=localStorage.getItem('userType')
    console.log(localStorage.getItem('userType'));
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('mobile'));

    this.getTeacherCount()
    this.getStudentCount()
    this.getCourseCount()

  }

  // get teacher count
  getTeacherCount() {
    this.authSrv.getTeacherCount().subscribe({
      next: (result) => {
        // console.log(result.teacherCount)
        this.teacherCount = result.teacherCount
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  // get teacher count
  getStudentCount() {
    this.authSrv.getStudentCount().subscribe({
      next: (result) => {
        // console.log(result.studentCount)
        this.studentCount = result.studentCount
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  // get course count
  getCourseCount() {
    this.authSrv.getCourseCount().subscribe({
      next: (result) => {
        console.log(result.courseCount)
        this.courseCount = result.courseCount
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  count = {
    teacher: 32,
    student: 12,
    course: 107
  }

}
