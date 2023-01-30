import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {

  courseList:any;
 courseName='';
  courseId='';
  fees='';
  id:any;
  userType:any;
  email:any;
  mobile:any;

  constructor() { }

  ngOnInit() {
    this.userType=localStorage.getItem('userType');
    this.id=localStorage.getItem('id');
    this.email=localStorage.getItem('email');
    this.mobile=localStorage.getItem('mobile');

    this.courseList=[
      { id: "12345", courseName: 'MEAN STACK', fees:12000, teacher: "Sanket Jagtap" },
      { id: "123456", courseName: 'MERN STACK', fees:12000, teacher: "Sanket Jagtap" },
      { id: "12336", courseName: 'FULL STACK', fees:12000, teacher: "Sanket Jagtap" },
      { id: "123465", courseName: 'JAVA', fees:12000, teacher: "Sanket Jagtap" }
  ]
  }

  getId(id:any, name:any, fees:any){
    console.log(id, name, fees)
    this.courseId=id
    this.courseName=name
    this.fees=fees
  }

  enrollCourse(courseData:any){
    console.log(courseData)
    this.courseName=''
  }

}
