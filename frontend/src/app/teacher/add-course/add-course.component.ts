import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {

  constructor(private authSrv: AuthService,
    private router: Router) { }

  ngOnInit() {}

  addCourse(courseData:any){
    this.authSrv.addCourse(courseData).subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
