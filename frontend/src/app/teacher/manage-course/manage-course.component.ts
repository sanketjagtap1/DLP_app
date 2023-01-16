import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss'],
})
export class ManageCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  editCourse(courseData:any){
    console.log(courseData)
  }

}
