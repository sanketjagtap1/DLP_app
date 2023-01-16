import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';
import { ManageLectureComponent } from './manage-lecture/manage-lecture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AddCourseComponent, ManageCourseComponent, AddLectureComponent, ManageLectureComponent, DashboardComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ]
})
export class TeacherModule { }
