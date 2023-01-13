import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  login(data: any) {
    console.log(data)
    this.authSrv.login(data).subscribe({
      next: (result) => {
        console.log(result)
        console.log(result.userType)
        

        if(result.userType == 'Admin'){
          console.log('Inside if')
          this.router.navigate(['/admin']);
        }else{
          console.log('This is not an admin')
        }

      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
