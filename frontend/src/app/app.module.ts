import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { StudentHeaderComponent } from './helper/student-header/student-header.component';
import { TeacherHeaderComponent } from './helper/teacher-header/teacher-header.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent,LoginComponent, HeaderComponent, StudentHeaderComponent, TeacherHeaderComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
