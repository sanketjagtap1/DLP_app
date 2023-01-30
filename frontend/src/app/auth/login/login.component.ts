import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userType:any;

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.userType=localStorage.getItem('userType');
   }

  login(data: any) {
    console.log(data)
    this.authSrv.login(data).subscribe({
      next: (result) => {

        localStorage.setItem('userType', result.userType);
        localStorage.setItem('id', result.id);
        localStorage.setItem('email', result.email);
        localStorage.setItem('mobile', result.mobile);




        if (result.userType == 'Admin') {
          this.router.navigate(['/admin']);
        } else if (result.userType == 'Student') {
          this.router.navigate(['/student']);
        } else if (result.userType == 'Teacher') {
          this.router.navigate(['/teacher']);
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
