import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent implements OnInit {

  constructor(private authSrv: AuthService,
    private router: Router) { }

  ngOnInit() {}

  addTeacher(data:any){
    console.log(data)
    this.authSrv.registration(data).subscribe({
      next: (result) => {
        console.log(result)
        console.log(result.newStudent.userType)
        
          this.router.navigate(['auth/login']);
      
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
