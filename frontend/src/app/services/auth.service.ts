import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base_url = 'http://192.168.0.104:3000/';

  constructor(private http: HttpClient) { }

  // auth Services
  registration(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'student/register', obj)
  }

  login(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'auth/login', obj)
  }


// admin services
// get teacher count
getTeacherCount(): Observable<any> {
  return this.http.get<any>(this.base_url+'admin/getTeacherCount')
}

// get teacher count
getStudentCount(): Observable<any> {
  return this.http.get<any>(this.base_url+'admin/getStudentCount')
}

// get teacher count
getCourseCount(): Observable<any> {
  return this.http.get<any>(this.base_url+'admin/getCourseCount')
}

// get user list
getUserList(): Observable<any> {
  return this.http.get<any>(this.base_url+'admin/getUserList')
}


  // manageTeacher
  // addCourse
  addCourse(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'teacher/createCourse', obj)
  }
  // editCourse
  // add  Lecture
  // edit Lecture

}
